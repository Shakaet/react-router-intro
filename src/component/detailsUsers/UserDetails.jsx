import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {

    let userDetails= useLoaderData();

    return (
        <div>

            <h2>Details about Users :{userDetails.name}</h2>
            <h2>Website :{userDetails.website}</h2>
            
        </div>
    );
};

export default UserDetails;