import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    users: defineTable({
        tokenIdentifier: v.string(),
        model: v.union(v.literal("gpt-3.5-turbo-1106"), v.literal("gpt-4-0125-preview")),
        endsOn: v.optional(v.number()),
        subscriptionId: v.optional(v.string()),
    })
        .index("by_token", ["tokenIdentifier"])
        .index("by_subscriptionId", ["subscriptionId"]),
    chats: defineTable({
        userId: v.id("users"),
        title: v.string(),
    })
        .index("by_userId", ["userId"]),
    messages: defineTable({
        role: v.union(
            v.literal("user"),
            v.literal("assistant")
        ),
        content: v.string(),
        chatId: v.id("chats"),
    })
        .index("by_chatId", ["chatId"])

})