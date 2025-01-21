import React from 'react';
interface Props {
    type: "primary" | "secondary" | "tertiary",
    onClick?: () => void,
    children: React.ReactNode,
    className?: string,
}

const Button: React.FC<Props> = ({ type, children, className, onClick }) => {
    let classname = `${className}`;

    switch (type) {
        case 'primary':
            classname += ' border rounded-lg px-3 py-1 border-gray-700 bg-gradient-to-b from-[#030014] to-[#282637] flex items-center justify-center  hover:from-[#0314] hover:to-purple-900 ';
            break;
        case 'secondary':
            classname += ' p-2 bg-blue-600 rounded-lg  hover:bg-blue-700 ';
            break;
        case 'tertiary':
            classname += ' border border-gray-800 text-secondary  p-1 border-purple-800 rounded-3xl px-4  hover:bg-purple-900 ';
            break;
        default:
            break;
    }

    return (
        <button className={classname} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;