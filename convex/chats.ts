import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

export const get = query({
    args: { id: v.id("chats") },
    handler: async (ctx, args) => {
        return await ctx.db
            .get(args.id);
    },
})

export const create = mutation({
    args: {},
    handler: async (ctx) => {
        const identity = await ctx.auth.getUserIdentity();
        if (!identity) {
            throw new Error("Called create chat without logged in user!");
        }

        const user = await ctx.db
            .query("users")
            .withIndex("by_token", (q) => q.eq("tokenIdentifier", identity.tokenIdentifier))
            .unique();

        if (user === null) {
            throw Error("User not found!");
        }

        const chatId = await ctx.db.insert("chats", {
            userId: user._id,
            title: "New chat",
        });

        return chatId;
    }
});

export const list = query({
    args: {},
    handler: async (ctx) => {
        const identity = await ctx.auth.getUserIdentity();
        if (!identity) {
            return [];
        }

        const user = await ctx.db
            .query("users")
            .withIndex("by_token", (q) =>
                q.eq("tokenIdentifier", identity.tokenIdentifier))
            .unique();

        if (user === null) {
            return null;
        }

        return ctx.db
            .query("chats")
            .withIndex("by_userId", (q) => q.eq("userId", user._id))
            .collect();
    }
});

export const rename = mutation({
    args: { id: v.id("chats"), title: v.string() },
    handler: async (ctx, args) => {
        await ctx.db.patch(args.id, {
            title: args.title,
        });
    },
});

export const remove = mutation({
    args: { id: v.id("chats") },
    handler: async (ctx, args) => {
        await ctx.db.delete(args.id);
    },
});