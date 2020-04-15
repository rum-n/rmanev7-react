import React from 'react';
import { useSpring, animated } from 'react-spring';
import ProjectCard from '../../components/projectCard/ProjectCard';
import './projects.css';
import ski from '../../img/ski.png';
import grip from '../../img/gripindoor2.png';
import results from '../../img/results.png';
import eeart from '../../img/eeart.png';
import finders from '../../img/finders.png';
import melewi from '../../img/melewi.png';
import word from '../../img/word.png';
import coda from '../../img/coda.png';


const Projects = () => {
    const fade = useSpring({opacity: 1, from: {opacity: 0}, delay: 400})
    return(
        <animated.div style={fade} className='projects'>
            <h1 className='header'>Projects</h1>
            
            <ProjectCard 
                link='https://rum-n.github.io/ski/' 
                title='Ski Dashboard' 
                image={ski}
                blurb='An online dashboard showing ski conditions at several places I like to go ski in Bulgaria. Data is pulled from the Dark Sky API.' 
                techstack='Tech Stack: HTML/CSS/JS'
            />

            <ProjectCard 
                link='https://melewi.net' 
                title='Melewi' 
                image={melewi}
                blurb='A website redesign for Melewi, a remote UX & UI design studio. The homepage was done by Jay Meistrich and I expanded the website with additional pages.' 
                techstack='Tech Stack: HTML/CSS/JS'
            />

            <ProjectCard 
                link='https://codapayments.com' 
                title='Coda Payments' 
                image={coda}
                blurb='A website redesign for Coda Payments - one of the leading payment providers for web and mobile gaming in Asia. Design created by Rikke Gantzel.' 
                techstack='Tech Stack: Webflow'
            />

            <ProjectCard 
                link='https://gripindoor.netlify.com/' 
                title='Gripindoor' 
                image={grip}
                blurb='An interactive map showing indoor climbing gyms across Europe. At first I was using Middleman as a static site generator, but then rewrote the app and made it simpler.' 
                techstack='Tech Stack: HTML/CSS/JS, Leaflet.js'
            />

            <ProjectCard 
                link='https://results.netlify.com/' 
                title='Race Results' 
                image={results}
                blurb='Visualizing race results from various running events. I wanted to play around with data visualizations using Highcharts, so I used it for something I like - running.'
                techstack='Tech Stack: HTML/CSS/JS, Highcharts, R'
            />

            <ProjectCard 
                link='https://rum-n.github.io/thewordfuck/' 
                title='The Word Fuck' 
                image={word}
                blurb='Again, I wanted to test out data visualizing, this time with D3. I was looking for available data to visualize, which I realize might have been something more informative, but you know how you sometimes randomly stumble across a weird Wikipedia article. Note: you should allow your browser to show pop-ups, in order to view the chart.' 
                techstack='Tech Stack: HTML/CSS/JS, D3.js'
            />

            <ProjectCard 
                link='https://finderskeepers.cc' 
                title='Finders/Keepers' 
                image={finders}
                blurb='Working as a Sales & BD manager for a few years, I developed my own method for researching and contacting potential leads. With this project, I wanted to offer this service to other tech companies.' 
                techstack='Tech Stack: No-code'
            />

            <ProjectCard 
                title='Easter European Art' 
                image={eeart}
                blurb='An online gallery to promote Eastern European artists. My dad paints, so it started as a website showcasing his works, but then I thought others might be interested to feature their work too.' 
                techstack='Tech Stack: No-code'
            />

        </animated.div>
    );
}

export default Projects;