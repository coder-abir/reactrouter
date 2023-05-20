/* eslint-disable no-unused-vars */
import React from 'react';

const Post = ({post}) => {
    const {title , body} = post;
    return (
        <div className='bg-emerald-200 border mb-2 p-5 rounded border-emerald-500'>
            <h3 className='text-2xl text-emerald-500 mb-5'>{title}</h3>
            <p className='text-emerald-700 '>{body}</p>
        </div>
    );
};

export default Post;