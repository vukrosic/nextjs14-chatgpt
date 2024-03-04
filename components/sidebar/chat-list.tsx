"use client";

import { api } from "@/convex/_generated/api"
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react"
import { useParams } from "next/navigation";

export const ChatList = () => {
    const chats = useQuery(api.chats.list);
    const { chatId } = useParams<{ chatId: Id<"chats"> }>();

    if (chats === undefined) {
        return <div>Loading...</div>
    }

    return (
        <div>
            {chats.map((chat) => (
                <div key={chat._id}>{chat.title}</div>
            ))}
        </div>
    )
}