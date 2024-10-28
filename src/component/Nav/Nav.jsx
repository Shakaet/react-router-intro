import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Nave.css"

const Nav = () => {
    return (
        <div>

            <nav className=''>
                <ul className='text-5xl m-5'>

                    {/* <Link className='btn btn-warning mr-3' to="/home">Home</Link> */}
                    <NavLink to="/home" className="btn mr-3">Home</NavLink>
                    <NavLink to="/about" className="btn mr-3">About</NavLink>
                    <NavLink to="/contact" className="btn mr-3">Contact</NavLink>
                    <NavLink to="/user" className="btn mr-3">User</NavLink>
                    <NavLink to="/comment" className="btn mr-3">Comments</NavLink>
                    <NavLink to="/photos" className="btn mr-3">Meals</NavLink>
                    {/* <Link className='btn btn-warning mr-3' to="/about">About</Link>
                    <Link className='btn btn-warning mr-3' to="/contact">Contact</Link>
                    <Link className='btn btn-warning mr-3' to="/user">User</Link>
                    <Link className='btn btn-warning mr-3' to="/comment">Comments</Link> */}
                    
                </ul>
            </nav>
            
        </div>
    );
};

export default Nav;