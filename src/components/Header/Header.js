import React from 'react';
import logo from '../../Quiz Nation.jpg'
import './Header.css'

const Header = () => {
    return (
        <div className='container d-flex header-section border border-2 rounded'>

            <div className='row'>
                <div className=' info-bg col-sm-12 col-md-9 d-flex flex-column justify-content-evenly align-items-start'>
                    <h2 className='text-white fw-1'>Quiz Nation develops <br /> your web tech knowledge </h2>
                    <p className='text-white fs-5 fw-5'>Take our intensive assesments, compiled by industry experts to test your knowledge on popular web technologies like React, JavaScript, CSS and Git</p>
                </div>

                <div className='col-md-3 col-sm-12 logo-pic'>
                    <img className='img-fluid' src={logo} alt="" />
                </div>
            </div>


        </div>
    );
};

export default Header;