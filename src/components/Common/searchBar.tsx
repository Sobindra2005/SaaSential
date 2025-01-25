import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
    placeholder: string;
    className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, className }) => {
    return (
        <div className={`relative w-full max-w-md ${className}`}>
            <input
                type="text"
                placeholder={placeholder}
                className={`w-full py-2 pl-10 pr-4 text-gray-200 bg-transparent border border-border rounded-full focus:border-secondary focus:outline-none `}
            />
            <div className="absolute left-0 top-3 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-gray-400" />
            </div>
        </div>
    );
};

export default SearchBar;