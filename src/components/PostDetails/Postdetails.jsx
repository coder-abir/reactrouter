/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Postdetails = () => {
    const postData = useLoaderData();
    const {title , body} = postData;
    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate(-1);
    }
    return (

        <div>
            <h3 className='text-2xl text-emerald-700'>Title: {title}</h3>
            <p>{body}</p>
            <button onClick={handleNavigation}>Go back</button>
        </div>
    );
};

export default Postdetails;