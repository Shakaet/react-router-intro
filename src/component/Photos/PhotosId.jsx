import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PhotosId = () => {
    let photosId=useLoaderData();

    let go=useNavigate()

    let handlego=()=>{
        go(-1)
    }
    return (
        <div>

            <h2>Id:{photosId.id}</h2>
            <h2>Id:{photosId.title}</h2>
            <button onClick={handlego} className='btn mt-5'>GO back</button>

            
            
        </div>
    );
};

export default PhotosId;