import React from "react";
import { UseFormRegister, FieldValues, Path } from "react-hook-form";
import { RiSparkling2Line } from "react-icons/ri";

interface InputProps<T extends FieldValues> {
    label: string;
    type: string;
    id: string;
    register: UseFormRegister<T>;
    required?: boolean;
    placeholder: string;
}

const Input = <T extends FieldValues>({
    label,
    type,
    id,
    register,
    required = false,
    placeholder,
}: InputProps<T>) => {
    return (
        <div className="mb-6 relative ">
            <label htmlFor={id as string} className="block text-gray-100 capitalize  mb-2">
                {label}
            </label>
            <input
                type={type}
                id={id as string}
                {...register(id as unknown as Path<T>, { required })}
                placeholder={placeholder}
                className="w-full p-2 border border-gray-700 focus:border-secondary hover:border-secondary rounded bg-transparent text-gray-400 outline-none"
            />
            <RiSparkling2Line size={22} className="absolute right-2 top-10 text-blue-300 cursor-pointer " />
        </div>
    );
};

interface TextArea<T extends FieldValues> {
    label: string;
    id: string;
    register: UseFormRegister<T>;
    required?: boolean;
    placeholder: string;
}


export const TextArea = <T extends FieldValues>({
    label,
    id,
    register,
    required = false,
    placeholder,
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
                className="w-full p-2 border  border-gray-700 focus:border-secondary overflow-auto resize-none hover:border-secondary rounded bg-transparent text-gray-400 outline-none"
            />
            <RiSparkling2Line onMouseOver={()=>console.log("yes i hover the button ") } size={22} className="absolute right-2 top-10 text-blue-300 cursor-pointer " />
        </div>
    );
};


export default Input;
