import React, { useState } from 'react';
import Project from '../Project';

function Portfolio() {
    const [projects] = useState([
        {
            title: '3 Guys Pizza-n-Pies',
            src: require('../../images/3-guys-pizza-n-pies-screenshot.png'),
            githubLink: 'https://github.com/p-fassbender/3-guys-pizza-n-pies',
            liveLink: 'https://agile-bastion-05286.herokuapp.com/',
            technologies: ['HTML5', 'CSS', 'Express', 'MySql', 'Bootstrap', 'Handlebars'],
            description: 'Small team project for an ecommerce website focused on full stack development following the MVC paradigm'
        }
    ])

    return (
        <div className='container'>
            <Project projects={projects}></Project>
        </div>
    )
}

export default Portfolio;