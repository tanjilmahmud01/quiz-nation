import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        // <div className='nav-bg shadow-lg'>
        //     <div className='container d-flex align-items-center justify-content-between '>
        //         <div className='title'>
        //             <Link to='/home'>
        //                 <h1>Quiz Nation</h1>
        //             </Link>

        //         </div>
        //         <div className='routes'>
        //             <Link to='/home'>Home</Link>
        //             <Link to='/topics'>Topics</Link>
        //             <Link to='/statistics'>Statistics</Link>
        //             <Link to='/blog'>Blog</Link>

        //         </div>
        //     </div>
        // </div>

        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid justify-content-center">

                <div className='title navbar-brand '>
                    <Link to='/home'>
                        <h1>Quiz Nation</h1>
                    </Link>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

                    <div className='routes navbar-nav ms-auto'>
                        <Link to='/home'>Home</Link>
                        <Link to='/topics'>Topics</Link>
                        <Link to='/statistics'>Statistics</Link>
                        <Link to='/blog'>Blog</Link>

                    </div>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;