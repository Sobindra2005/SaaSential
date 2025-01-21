import React from 'react';
import Container from '../Container';



const DashContainer: React.FC<{ children: React.ReactNode, className: string }> = ({ children, className }) => {
    return (
        <Container className={`${className} px-[7rem]`}>
            {children}
        </Container>
    );
}

export default DashContainer;