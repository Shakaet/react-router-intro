import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Use from '../Use/Use';

const User = () => {

    let user= useLoaderData();

    return (
        <div>

            <h2 className='text-3xl'>This is Users Section</h2>
            <h3>Total user : {user.length}</h3>
            <p>You can see all of user from it</p>

            <div className='grid md:grid-cols-3 gap-5'>
            {
                user.map(item=><Use user={item}></Use>)
            }
            </div>
            
        </div>
    );
};

export default User;