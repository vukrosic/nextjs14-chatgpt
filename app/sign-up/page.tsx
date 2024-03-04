"use client";

import { Loading } from "@/components/auth/loading";
import { api } from "@/convex/_generated/api";
import { useConvexAuth, useMutation } from "convex/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const SignUp = () => {
    const { isAuthenticated } = useConvexAuth();
    const storeUser = useMutation(api.users.store);
    const router = useRouter();

    useEffect(() => {
        const storeUserData = async () => {
            if (isAuthenticated) {
                try {
                    await storeUser();
                    router.push("/");
                } catch (error) {
                    console.log(error);
                }
            }
        }

        storeUserData();
    }, [isAuthenticated, storeUser, router])

    return (
        <Loading />
    )
}

export default SignUp;