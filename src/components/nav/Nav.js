import React from 'react';
import { Link } from "react-router-dom";
import './nav.css';

const Nav = () => {
    return(
        <div>
            <ul className='menu'>
                <Link to='/'>
                    <li>Intro</li>
                </Link>
                <Link to='/about'>
                    <li>About</li>
                </Link>
                <Link to='/projects'>
                    <li>Projects</li>
                </Link>
                <Link to='/blog'>
                    <li>Blog</li>
                </Link>
            </ul>
        </div>
    );
}

export default Nav;