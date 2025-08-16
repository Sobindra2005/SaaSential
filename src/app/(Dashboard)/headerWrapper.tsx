"use client";

import AfterLoginHeader from "@/components/Layout/AfterLogin/Dashboard/header";
import { useOnCreate } from "./contextProvider";

export const HeaderWrapper = ({ children }: { children: React.ReactNode }) => {
    const { onCreate } = useOnCreate();

    console.log("onCreate function in HeaderWrapper:", onCreate);

    return (
        <>
            <AfterLoginHeader onCreate={onCreate} />
            {children}
        </>
    );
};