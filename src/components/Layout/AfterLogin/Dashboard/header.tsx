"use client";

import React from "react";
import { FaPlus, FaCog, FaSignOutAlt } from "react-icons/fa";
import Container from "../../Container";
import Logo from "../../../Common/Logo";
import Button from "../../../Common/Buttons";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

interface Props {
    onCreate?: () => void;
}

const AfterLoginHeader: React.FC<Props> = ({ onCreate }) => {
    const pathname = usePathname();

    return (
        <Container className="flex py-4 items-center z-10 justify-between border-b border-gray-800 bg-primary sticky top-0 right-0 w-full">
            <div>
                <Logo />
            </div>
            {pathname === "/home" ? (
                <div className="flex items-center gap-10">
                    <Button
                        onClick={() => {
                            if (onCreate) {
                                console.log("onCreate invoked");
                                onCreate();
                            } else {
                                console.warn("onCreate is not defined");
                            }
                        }}
                        ButtonType="secondary"
                        className="flex items-center gap-2"
                    >
                        <FaPlus /> <span className="hidden md:block"> Add New Project </span>
                    </Button>
                </div>
            ) : (
                <div className="h-10"></div>
            )}

            <div className="relative">
                <div className="hidden md:flex items-center gap-5">
                    <FaCog size={22} className="cursor-pointer hover:text-purple-500 transition-colors" />
                    <FaSignOutAlt
                        size={22}
                        className="cursor-pointer hover:text-purple-500 transition-colors"
                        onClick={() => signOut({ callbackUrl: "/home" })}
                    />
                </div>
            </div>
        </Container>
    );
};

export default AfterLoginHeader;