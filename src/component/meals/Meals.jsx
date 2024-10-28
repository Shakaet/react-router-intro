import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meal from '../meal/Meal';

const Meals = () => {
    let meal=useLoaderData();
    


    
    return (
        <div>
            <h2>This is meal section {meal.length}</h2>

           <div className='grid md:grid-cols-4 gap-5 mt-5'>
           {
                meal.map(item=><Meal meals={item}></Meal>)
            }
           </div>
           


            
        </div>
    );
};

export default Meals;