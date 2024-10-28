import React from 'react';
import Nav from '../Nav/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';

const Header = () => {
    return (
        <div>

            <Nav></Nav>
    
            <Outlet></Outlet>

            <Footer></Footer>
            
        </div>
    );
};

export default Header;