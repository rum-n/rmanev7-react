import React from 'react';
import {useSpring, animated} from 'react-spring';
import './main.css';

const Main = () => {
    const fade = useSpring({opacity: 1, from: {opacity: 0}, delay: 400})
    return(        
        <animated.div style={fade}>
            <h2 className='heading'>Creating stuff for the web, based on <span className="data">data</span>, personal <span className="interests">interests</span> and occasionally ⁠— for other <span className='people'>people</span>.</h2>
        </animated.div>    
    )
};

  export default Main;