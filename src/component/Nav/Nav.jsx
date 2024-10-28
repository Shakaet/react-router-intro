import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>

            <nav className=''>
                <ul className='text-5xl m-5'>

                    <Link className='btn btn-warning mr-3' to="/home">Home</Link>
                    <Link className='btn btn-warning mr-3' to="/about">About</Link>
                    <Link className='btn btn-warning mr-3' to="/contact">Contact</Link>
                    <Link className='btn btn-warning mr-3' to="/user">User</Link>
                    <Link className='btn btn-warning mr-3' to="/comment">Comments</Link>
                    
                </ul>
            </nav>
            
        </div>
    );
};

export default Nav;