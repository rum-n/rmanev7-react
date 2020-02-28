import React, {useState} from 'react';
import Main from '../main/Main';
import About from '../about/About';
import Projects from '../projects/Projects';
import './nav.css';

const Nav = () => {
    const [content, setContent] = useState(<Main />);

    const aboutClick = () => {
        setContent(<About />);
    }
  
    const projectsClick = () => {
        setContent(<Projects />);
    }
  
    const introClick = () => {
        setContent(<Main />);
    }

    return(
        <div>
            <ul className='menu'>
                <li onClick={introClick}>Intro</li>
                <li onClick={aboutClick}>About</li>
                <li onClick={projectsClick}>Projects</li>
            </ul>
            {content}
        </div>
    );
}

export default Nav;