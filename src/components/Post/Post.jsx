/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {title , body , id} = post;
    return (
        <div className='bg-emerald-200 border mb-2 p-5 rounded border-emerald-500'>
            <h3 className='text-2xl text-emerald-500 mb-5'>{title}</h3>
            <p className='text-emerald-700 '>{body}</p>
            <Link to={`/post/${id}`}>
            <button className='bg-emerald-500 text-white rounded p-2 mt-3'>Show More</button>
            </Link>
            
        </div>
    );
};

export default Post;