'use client';
import { createContext, useState, useContext } from "react";

interface ChatContextType {
    newChat: boolean;
    changeContext: (value: boolean) => void;
    currentChatId: string | null;
    changeCurrentChatId: (id: string | null) => void;
}

const chatContext = createContext<ChatContextType | undefined>(undefined);

export const CreateChatContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [newChat, setNewChat] = useState(false);
    const [currentChatId, setCurrentChatId] = useState<string | null>(null);

    const changeContext = (value: boolean) =>
        setNewChat(value);

    const changeCurrentChatId = (id: string | null) => {
        setCurrentChatId(id);
    }

    return (
        <chatContext.Provider value={{ newChat, changeContext, currentChatId, changeCurrentChatId }}>
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