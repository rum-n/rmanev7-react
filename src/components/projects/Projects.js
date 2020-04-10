import React from 'react';
import { useSpring, animated } from 'react-spring';
import ProjectCard from '../projectCard/ProjectCard';
import './projects.css';

const Projects = () => {
    const fade = useSpring({opacity: 1, from: {opacity: 0}, delay: 400})
    return(
        <animated.div style={fade} className='projects'>
            <h1 className='header'>Projects</h1>
            
            <ProjectCard 
                link='https://rum-n.github.io/ski/' 
                title='Ski Dashboard' 
                blurb='An online dashboard showing ski conditions at several places I like to go ski in Bulgaria. Data is pulled from the Dark Sky API.' 
                techstack='Tech Stack: HTML/CSS/JS'
            />

            <ProjectCard 
                link='https://melewi.net' 
                title='Melewi' 
                blurb='A website redesign for Melewi, a remote UX & UI design studio. The homepage was done by Jay Meistrich and I expanded the website with additional pages.' 
                techstack='Tech Stack: HTML/CSS/JS'
            />

            <ProjectCard 
                link='https://codapayments.com' 
                title='Coda Payments' 
                blurb='A website redesign for Coda Payments - one of the leading payment providers for web and mobile gaming in Asia. Design created by Rikke Gantzel.' 
                techstack='Tech Stack: Webflow'
            />

            <ProjectCard 
                link='https://gripindoor.netlify.com/' 
                title='Gripindoor' 
                blurb='An interactive map showing indoor climbing gyms across Europe. At first I was using Middleman as a static site generator, but then rewrote the app and made it simpler.' 
                techstack='Tech Stack: HTML/CSS/JS, Leaflet.js'
            />

            <ProjectCard 
                link='https://results.netlify.com/' 
                title='Race Results' 
                blurb='Visualizing race results from various running events. I wanted to play around with data visualizations using Highcharts, so I used it for something I like - running.'
                techstack='Tech Stack: HTML/CSS/JS, Highcharts, R'
            />

            <ProjectCard 
                link='https://rum-n.github.io/thewordfuck/' 
                title='The Word Fuck' 
                blurb='Again, I wanted to test out data visualizing, this time with D3. I was looking for available data to visualize, which I realize might have been something more informative, but you know how you sometimes randomly stumble across a weird Wikipedia article. Note: you should allow your browser to show pop-ups, in order to view the chart.' 
                techstack='Tech Stack: HTML/CSS/JS, D3.js'
            />

            <ProjectCard 
                title='Easter European Art' 
                blurb='An online gallery to promote Eastern European artists. My dad paints, so it started as a website showcasing his works, but then I thought others might be interested to feature their work too.' 
                techstack='Tech Stack: No-code'
            />

        </animated.div>
    );
}

export default Projects;