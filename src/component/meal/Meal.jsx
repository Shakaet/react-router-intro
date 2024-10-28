import React from 'react';
import { useNavigate } from 'react-router-dom';

const Meal = ({meals}) => {

    let state=useNavigate()

    let handleShow=()=>{
        state(`/photos/${meals.id}`)
    }
    return (
        <div className='border border-2 rounded-lg p-5'>
            <h1>Id:{meals.id}</h1>
            <h2>Title:{meals.title}</h2>
            <button onClick={handleShow} className='btn mt-5'>Show Details</button>
            
        </div>
    );
};

export default Meal;