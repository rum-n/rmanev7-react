import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from "react-router-dom";
import './blog.css'
import BlogCard from '../../components/blogCard/BlogCard';

const Blog = () => {
    const fade = useSpring({opacity: 1, from: {opacity: 0}, delay: 400})
    return (        
        <animated.div style={fade} className='about'>
            <h1 className='header'>Blog</h1>
            <Link to='/starting-a-family-remote-work'>
            <BlogCard 
                title='Starting a family? Here’s why you should consider remote work.' 
                blurb='About a year and a half ago when I started working remotely at Melewi I was super excited about having the freedom to decide where to work from and how to organize my productive hours[...]' 
                date='Aug 22, 2019'
            />
            </Link>

            <Link to='/how-to-write-better-proposals'>
            <BlogCard 
                title='How to write better proposals and close more deals' 
                blurb='Let me paint this hypothetical picture for you — you’ve just finished an initial sales call or live meeting with a prospective client. The meeting went really well[...]' 
                date='Jan 4, 2019'
            />
            </Link>
        </animated.div>
        )
    }

export default Blog;