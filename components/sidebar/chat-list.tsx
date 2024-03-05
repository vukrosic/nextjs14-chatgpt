"use client";

import { api } from "@/convex/_generated/api"
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react"
import { useParams } from "next/navigation";
import { ChatBox } from "./chat-box";

export const ChatList = () => {
    const chats = useQuery(api.chats.list);
    const { chatId } = useParams<{ chatId: Id<"chats"> }>();

    if (chats === undefined) {
        return <div>Loading...</div>
    }

    return (
        <div className="flex flex-col flex-1 overflow-y-auto">
            {chats.map((chat) => (
                <ChatBox
                    key={chat._id}
                    chat={chat}
                    selected={chat._id === chatId}
                />
            ))}
        </div>
    )
}