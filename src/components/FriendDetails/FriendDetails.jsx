/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    console.log(friend);
    const {name , email , phone,username} = friend;
    return (
        <div>
            <h3 className='text-2xl text-emerald-800'>Name: {name}</h3>
            <h3 className='text-2xl text-emerald-800'>Email: {email}</h3>
            <h3 className='text-2xl text-emerald-800'>UserName: {username}</h3> 
            <h3 className='text-2xl text-emerald-800'>Phone: {phone}</h3>
        </div>
    );
}; 

export default FriendDetails;