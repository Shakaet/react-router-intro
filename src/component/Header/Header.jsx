import React from 'react';
import Nav from '../Nav/Nav';
import { Outlet, useLocation, useNavigation } from 'react-router-dom';
import Footer from '../footer/Footer';

const Header = () => {
    const navigation = useNavigation();
    let location= useLocation()
    console.log(location)
    return (
        <div>

            <Nav></Nav>

            {
                 navigation.state === "loading"
                ? <p>loading...</p>
                : <Outlet></Outlet>
            }
    
            {/* <Outlet></Outlet> */}

            <Footer></Footer>
            
        </div>
    );
};

export default Header;