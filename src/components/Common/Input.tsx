import React from 'react';
import { UseFormRegister } from 'react-hook-form';

interface InputProps {
    label: string;
    type: string;
    id: string;
    register: UseFormRegister<any>;
    required?: boolean;
}

const Input: React.FC<InputProps> = ({ label, type, id, register, required = false }) => {
    return (
        <div className="mb-6">
            <label htmlFor={id} className="block text-gray-300 mb-2">{label}</label>
            <input
                type={type}
                id={id}
                {...register(id)}
                className="w-full p-2 border border-gray-700 focus:border-secondary hover:border-secondary rounded bg-transparent text-gray-400  outline-none "
                required={required}
            />

        </div>
    );
};

export default Input;