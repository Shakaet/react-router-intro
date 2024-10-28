import React from 'react';
import { Link } from 'react-router-dom';

const Use = ({user}) => {
    let {name,id,email,phone}= user
    return (
        <div className='border border-2 mt-2 rounded-lg p-3'>
            <p>{id}</p>
            <p>{name}</p>
             <p>{email}</p>
             <p>{phone}</p>
             <Link to={`/user/${id}`} className='btn'>Show Details</Link>
            
        </div>
    );
};

export default Use;