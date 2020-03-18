import React from 'react';
import './projectCard.css';

const Card = (props) => {
    return (
    <a href='https://rum-n.github.io/ski/'><div className='projectCard'>
        <p className='projectName data'>{props.title}</p>
    <p className='projectBlurb'>{props.blurb}</p>
    </div></a>
    );
}

export default Card;