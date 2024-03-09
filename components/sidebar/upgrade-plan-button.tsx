"use client";

import { UpgradeModal } from "@/app/chat/[chatId]/_components/header/upgrade-modal";
import { api } from "@/convex/_generated/api";
import { currentUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { useState } from "react"
import { Button } from "../ui/button";
import { Sparkles } from "lucide-react";

export const UpgradePlanButton = () => {
    const [openUpgradeModal, setOpenUpgradeModal] = useState(false);
    const currentUser = useQuery(api.users.currentUser, {});

    const handleClick = () => {
        setOpenUpgradeModal(true);
    }

    const isSubscribed = currentUser && (currentUser?.endsOn ?? 0) > Date.now();

    return (
        <>
            {!isSubscribed && (
                <>
                    <UpgradeModal
                        open={openUpgradeModal}
                        setOpen={setOpenUpgradeModal}
                    />
                    <Button className="bg-tranparent gap-x-2 justify-start p-2 h-fit hover:bg-neutral-800" onClick={handleClick}>
                        <Sparkles className="rounded-full bg-transparent border-[1px] border-neutral-600 rounded-full p-1 fill-white" />
                        <div className="text-start">
                            <h3>Upgrade plan</h3>
                            <h5 className="font-normal text-xs text-zinc-400">Get GPT-4</h5>
                        </div>
                    </Button>
                </>
            )}
        </>
    )
}