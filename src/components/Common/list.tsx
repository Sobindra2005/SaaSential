import React from "react";
import { motion } from "framer-motion";

type ListProps = {
    items: { name: string, icon: React.ReactNode }[];
    className?: string;
    defaultValue: string;
    onSelect?: (value: string) => void;
};

const listContainerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

export const List = React.forwardRef<HTMLDivElement, ListProps>(
    ({ items, className = "", defaultValue, onSelect, ...rest }, ref) => (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={listContainerVariants}
            className={`bg-primary rounded-lg shadow-sm shadow-indigo-500 overflow-hidden ${className}`}
            ref={ref}
            {...rest}
        >
            <ul>
                {items.map((item, idx) => (
                    <li
                        key={idx}
                        onClick={() => onSelect?.(item.name)}
                        className={`flex gap-2 items-center py-2 px-2 ${
                            defaultValue == item.name && "bg-blue-900"
                        } hover:bg-blue-900 cursor-pointer`}
                    >
                        <span className="text-blue-300">{item.icon}</span> {item.name}
                    </li>
                ))}
            </ul>
        </motion.div>
    )
);

List.displayName = "List";

export default List;