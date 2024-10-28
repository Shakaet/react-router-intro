import React from 'react';
import { Link, useNavigate, useRouteError } from 'react-router-dom';

const Error = () => {

    const error = useRouteError();
    const navigate = useNavigate();

    let handlebtn=()=>{
        navigate("/")
    }
    console.log(error)
    return (
        <div>

            <h1>Opps!!</h1>

            <p>
        <i>{error.statusText || error.message}</i>
      </p>

      {
        error.status=== 404 && <div>

            <h1>Error Found</h1>
             <Link to="/" className='btn'>Go back</Link>
             <button onClick={handlebtn} className='btn'>Go back btn</button>



        </div>

      }
            
        </div>
    );
};

export default Error;