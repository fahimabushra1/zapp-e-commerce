"use client"
import { useParams } from 'next/navigation';
import React from 'react';

const Blogg = () => {
    const params = useParams();
    console.log("params.slug:", params.slug);
    return (
        <div>
            blog page
        </div>
    );
};

export default Blogg;