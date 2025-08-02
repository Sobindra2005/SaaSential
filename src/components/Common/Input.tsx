import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { UseFormRegister, FieldValues, Path } from "react-hook-form";
import { RiSparkling2Line, RiEyeLine, RiEyeOffLine, RiLoader4Line } from "react-icons/ri";

interface InputProps<T extends FieldValues> {
    label: string;
    type: string;
    id: string;
    register: UseFormRegister<T>;
    required?: boolean;
    placeholder: string;
    enabledSparkle?: boolean;
    handleAiGenerateContent?: () => void;
    isGenerating?: boolean;

}

const Input = <T extends FieldValues>({
    label,
    type,
    id,
    register,
    required = false,
    placeholder,
    handleAiGenerateContent,
    isGenerating,
    enabledSparkle = true
}: InputProps<T>) => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev);
    };
    const inputType = type === 'password' && showPassword ? 'text' : type;

    return (
        <div className="mb-6 relative ">
            <label htmlFor={id as string} className="block text-gray-100 capitalize  mb-2">
                {label}
            </label>
            <input
                type={inputType}
                id={id as string}
                {...register(id as unknown as Path<T>, { required })}
                placeholder={placeholder}
                className="w-full p-2 border border-gray-700 focus:border-secondary hover:border-secondary rounded bg-transparent  outline-none"
            />
            {type === 'password' && (
                <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-2 top-10 text-blue-300 cursor-pointer"
                >
                    {showPassword ? <RiEyeOffLine size={22} /> : <RiEyeLine size={22} />}
                </button>
            )}
            {enabledSparkle && (isGenerating ? (
                <div className="absolute right-2 top-10">
                    <div className="animate-spin text-blue-300">
                        <RiLoader4Line size={22} />
                    </div>
                </div>
            ) : (
                <RiSparkling2Line
                    onClick={handleAiGenerateContent}
                    size={22}
                    className="absolute right-2 top-10 text-blue-300 cursor-pointer"
                />
            ))}
        </div>
    );
};

interface TextArea<T extends FieldValues> {
    label: string;
    id: string;
    register: UseFormRegister<T>;
    required?: boolean;
    placeholder: string;
    handleAiGenerateContent?: () => void;
    isGenerating: boolean;
    enabledSparkle?: boolean;

}


export const TextArea = <T extends FieldValues>({
    label,
    id,
    register,
    required = false,
    placeholder,
    handleAiGenerateContent,
    isGenerating,
    enabledSparkle = false
}: TextArea<T>) => {
    return (
        <div className="mb-6 relative ">
            <label htmlFor={id as string} className="block capitalize text-gray-100 mb-2">
                {label}
            </label>
            <textarea
                rows={4}
                id={id as string}
                {...register(id as unknown as Path<T>, { required })}
                placeholder={placeholder}
                className="w-full p-2 border  border-gray-700 focus:border-secondary overflow-auto resize-none hover:border-secondary rounded bg-transparent outline-none"
            />
            {enabledSparkle && (isGenerating ? (
                <div className="absolute right-2 top-10">
                    <div className="animate-spin text-blue-300">
                        <RiLoader4Line size={22} />
                    </div>
                </div>
            ) : (
                <RiSparkling2Line
                    onClick={handleAiGenerateContent}
                    size={22}
                    className="absolute right-2 top-10 text-blue-300 cursor-pointer"
                />
            ))}
        </div>
    );
};

interface ComboBoxProps {
    name: string;
    className?: string;
    onClick?: () => void;
}

export const ComboBox: React.FC<ComboBoxProps> = ({ name, className = "", onClick }) => (
    <div
        className={`flex items-center cursor-pointer rounded-lg gap-1 bg-primary/40 hover:bg-primary/100 transition-colors px-3 py-1  absolute ${className}`}
        onClick={onClick}
        style={{ width: "fit-content" }}
    >
        <span className="text-gray-400 text-sm">{name}</span>
    </div>
);

type XlTextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    rows?: number;
    style?: React.CSSProperties;
};

export const XlTextArea: React.FC<XlTextAreaProps> = ({
    value,
    onChange,
    placeholder = "Describe your idea here...",
    disabled = false,
    className = "",
    rows = 3,
    style = {},
    ...rest
}) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [value]);

    return (
        <textarea
            ref={textareaRef}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            rows={rows}
            className={`flex-grow p-4 rounded-lg bg-gray-800 resize-none w-full h-full text-base outline-none shadow-inner ${className}`}
            style={{
                scrollbarWidth: "thin",
                scrollbarColor: "transparent transparent",
                ...style,
            }}
            {...rest}
        />
    );
};

export default Input;
