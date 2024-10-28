import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CommentsId = () => {

    let comments=useLoaderData();

   
    return (
        <div>

            <h2>Comments Specific Id Details</h2>

           <div className='border border-2'>
           <h1>{comments.id}</h1>
            <h1>{comments.name}</h1>
            <h2>{comments.email}</h2>
            <p className='flex-grow'>{comments.body}</p>
           </div>
            
        </div>
    );
};

export default CommentsId;