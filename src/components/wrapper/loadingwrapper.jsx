"use client"
import React, { useState, useEffect } from 'react';
import Loader from '../Common/loading/loader';

export  function LoadingWrapper({ children }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000); 

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading && <Loader />}
            {!loading && children}
        </>
    );
}