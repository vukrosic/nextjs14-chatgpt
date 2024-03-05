import { ChatList } from "./chat-list";
import { NewChatButton } from "./new-chat-button";

export const Sidebar = () => {
    return (
        <div className="h-full lg:flex lg:flex-col lg:w-[300px] bg-neutral-950 p-4">
            <NewChatButton />
            <ChatList />
            <p>UpgradePlanButton</p>
        </div>
    );
};