import React from 'react';
import './projectCard.css';

const ProjectCard = (props) => {
    return (
    <a href={props.link}><div className='projectCard'>
        <p className='projectName data'>{props.title}</p>
        <p className='projectBlurb'>{props.blurb}</p>
        <p></p>
        <p className='projectBlurb people'>{props.techstack}</p>
    </div></a>
    );
}

export default ProjectCard;