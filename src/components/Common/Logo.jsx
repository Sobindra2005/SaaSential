import React from 'react';
import { FaGlobe } from 'react-icons/fa';

const Logo = () => {
    return (
        <div className="flex items-center space-x-2">
            <FaGlobe className="w-6 h-6 text-blue-500" />
            <div>
                {"Saa"}<span className='text-purple-400'>{"Sential"}</span>
            </div>
        </div>
    );
};

export default Logo;