import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { internal } from "./_generated/api";

const http = httpRouter();

http.route({
    path: "/stripe",
    method: "POST",
    handler: httpAction(async (ctx, request) => {
        const signature: string = request.headers.get("stripe-signature") as string;
        const result = await ctx.runAction(internal.stripe.fulfill, {
            signature,
            payload: await request.text(),
        });
        if (result.success) {
            return new Response(null, {
                status: 200,
            });
        } else {
            return new Response("Webhook Error", {
                status: 400,
            });
        }
    }),
});

export default http;