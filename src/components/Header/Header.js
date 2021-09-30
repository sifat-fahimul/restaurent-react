import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "blue"
    }
    return (
        <div className='mt-3 text-center'>
            <NavLink className='text-decoration-none p-2 fs-5' activeStyle={activeStyle} to='/home' >Home</NavLink>
            <NavLink className='text-decoration-none p-2 fs-5' activeStyle={activeStyle} to='/about' >About</NavLink>
            <NavLink className='text-decoration-none p-2 fs-5' activeStyle={activeStyle} to='/restaurant' >Restaurant</NavLink>
        </div>
    );
};

export default Header;