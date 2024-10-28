import React from 'react';
import { Link } from 'react-router-dom';

const ComDeta = ({comment}) => {

    let{id,name,email,body}=comment
    return (
        <div className='border border-2 rounded-lg p-5 flex flex-col'>

            <h1>{id}</h1>
            <h1>{name}</h1>
            <h2>{email}</h2>
            <p className='flex-grow'>{body}</p>
            <Link to={`/comment/${id}`} className='btn mt-3 btn-warning'>Show Details</Link>

            
        </div>
    );
};

export default ComDeta;