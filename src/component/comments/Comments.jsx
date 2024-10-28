import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ComDeta from '../CommentsDetails/ComDeta';

const Comments = () => {

    let comments= useLoaderData();
    return (
        <div>

            <h2>This is Comment Section</h2>
            <h2>Comments length :{comments.length}</h2>

           <div className='grid md:grid-cols-3 gap-5'>
           {
                comments.map(item=><ComDeta comment={item}></ComDeta>)
            }
            
           </div>
        </div>
    );
};

export default Comments;