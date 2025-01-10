import React from 'react';

export default function Container({ children, padding = 'p-3', className = '' }) {
    return (
        <div className={`${padding} ${className}`}>
            {children}
        </div>
    );
}