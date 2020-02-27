import React from 'react';
import './nav.css';

const Nav = () => {
    return(
        <div>
            <ul className='menu'>
                <li onClick='{props.onClick}'>Intro</li>
                <li onClick='{props.onClick}'>About</li>
                <li onClick='{props.onClick}'>Projects</li>
            </ul>
        </div>
    );
}

export default Nav;