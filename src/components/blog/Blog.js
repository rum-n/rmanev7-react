import React from 'react';
import { useSpring, animated } from 'react-spring';
import './blog.css'

const Blog = () => {
    const fade = useSpring({opacity: 1, from: {opacity: 0}, delay: 400})
    return (        
        <animated.div style={fade} className='about'>
            <h1 className='header'>Blog</h1>
            <p>Coming soon...</p>
        </animated.div>
        )
    }

export default Blog;