import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import { NewChatButton } from "../sidebar/new-chat-button"
import { ChatList } from "../sidebar/chat-list"
import { UpgradePlanButton } from "../sidebar/upgrade-plan-button"

export const MobileSidebar = () => {
    return (
        <div className="block lg:hidden">
            <Sheet>
                <SheetTrigger>
                    <Menu className="text-white" />
                </SheetTrigger>
                <SheetContent side={"left"} className="h-full flex p-4 bg-neutral-950 flex-col">
                    <NewChatButton />
                    <ChatList />
                    <UpgradePlanButton />
                </SheetContent>
            </Sheet>
        </div>
    )
}