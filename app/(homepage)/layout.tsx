import { Sidebar } from "@/components/sidebar";

interface ChatLayoutProps {
    children: React.ReactNode;
}

export default function ChatLayout({ children }: ChatLayoutProps) {
    return (
        <main className="flex h-full text-white">
            <Sidebar />
            <div className="h-full w-full">
                {children}
            </div>
        </main>
    )
}