import React from 'react';

export default function Container({ children, padding = 'p-3', className = '' , ...rest}) {
    return (
        <div className={`${padding} ${className}`} {...rest}>
            {children}
        </div>
    );
}