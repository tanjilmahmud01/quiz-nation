import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='nav-bg shadow-lg'>
            <div className='container d-flex align-items-center justify-content-between '>
                <div className='title'>
                    <Link to='/home'>
                        <h1>Quiz Nation</h1>
                    </Link>

                </div>
                <div className='routes'>
                    <Link to='/home'>Home</Link>
                    <Link to='/topics'>Topics</Link>
                    <Link to='/statistics'>Statistics</Link>
                    <Link to='/blog'>Blog</Link>

                </div>
            </div>
        </div>

    );
};

export default Navbar;