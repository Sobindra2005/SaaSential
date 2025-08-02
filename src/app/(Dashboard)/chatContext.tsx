'use client';
import { createContext, useState, useContext } from "react";

interface ChatContextType {
    newChat: boolean;
    changeContext: (value: boolean) => void;
}

const chatContext = createContext<ChatContextType | undefined>(undefined);

export const CreateChatContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [newChat, setNewChat] = useState(false);

    const changeContext = (value: boolean) =>
        setNewChat(value);

    return (
        <chatContext.Provider value={{ newChat, changeContext }}>
            {children}
        </chatContext.Provider>
    );
}

export const useChatContext = () => {
    const context = useContext(chatContext);
    if (!context) {
        throw new Error("useChatContext must be used within a createChatContext");
    }
    return context;
}