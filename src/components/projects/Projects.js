import React from 'react';
import {useSpring, animated} from 'react-spring';
import './projects.css'

const Projects = () => {
    const fade = useSpring({opacity: 1, from: {opacity: 0}, delay: 400})
    return(
        <animated.div style={fade} className='projects'>
            <h1 className='header'>Projects</h1>

            <a href='https://rum-n.github.io/ski/'><div className='projectCard'>
                <p className='projectName data'>Ski Dashboard</p>
                <p className='projectBlurb'>An <span>online dashboard</span> showing ski conditions at several places I like to go ski in Bulgaria. Data is pulled from the Dark Sky API. <br /> <br /> <span className='people'>Tech Stack:</span> HTML/CSS/JS</p>
            </div></a>

            <a href='https://melewi.net'><div className='projectCard'>
                <p className='projectName data'>Melewi website</p>
                <p className='projectBlurb'>A <span>website redesign</span> for Melewi, a remote UX & UI design studio. The homepage was done by <a href='http://mei.st/'>Jay Meistrich</a> and I expanded the website with additional pages. <br /> <br /> <span className='people'>Tech Stack:</span> HTML/CSS/JS</p>
            </div></a>

            <a href='https://codapayments.com'><div className='projectCard'>
                <p className='projectName data'>Coda Payments website</p>
                <p className='projectBlurb'>A <span>website redesign</span> for Coda Payments - one of the leading payment providers for web and mobile gaming in Asia. It's worth mentioning I didn't create the design - only the implementation. <br /> <br /> <span className='people'>Tech Stack:</span> Webflow</p>
            </div></a>
            
            <a href='https://gripindoor.netlify.com/'><div className='projectCard'>
                <p className='projectName data'>Gripindoor</p>
                <p className='projectBlurb'>An <span>interactive map</span> showing indoor climbing gyms across Europe. At first I was using Middleman as a static site generator, but then rewrote the app and made it simpler. <br /> <br /> <span className='people'>Tech Stack:</span> HTML/CSS/JS, Leaflet.js</p>
            </div></a>

            <a href='https://results.netlify.com/'>
            <div className='projectCard'>
                <p className='projectName data'>Race Results</p>
                <p className='projectBlurb'>Visualizing race results from various running events. I wanted to play around with <span>data visualizations</span> using Highcharts, so I used it for something I like - running.<br /> <br /> <span className='people'>Tech Stack:</span> HTML/CSS/JS, Highchart.js, R</p>
            </div></a>

            <a href='https://rum-n.github.io/thewordfuck/'>
            <div className='projectCard'>
                <p className='projectName data'>The Word Fuck</p>
                <p className='projectBlurb'>Again, wanted to test out <span>data visualizing</span>, this time with D3. I was looking for available data to visualize, which I realize might've been something more informative, but you know how you sometimes randomly stumble across a weird Wikipedia article. Note: it won't show the data if you're using pop-up blockers.<br /> <br /> <span className='people'>Tech Stack:</span> HTML/CSS/JS, D3.js, R</p>
            </div></a>

            <div className='projectCard'>
                <p className='projectName data'>Easter European Art</p>
                <p className='projectBlurb'>An <span>online gallery</span> to promote Eastern European artists. My dad paints, so it started as a website showcasing his works, but then I thought others might be interested to feature their work too.<br /> <br /> <span className='people'>Tech Stack:</span> No-code solution.</p>
            </div>
        </animated.div>
    );
}



export default Projects;