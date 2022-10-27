import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const course = useLoaderData();
    const { _id} = course;
    return (
        <div>
            <h1 className='text-success'>Successfully,you enrolled this course {_id}</h1>
            
        </div>
    );
};

export default Checkout;