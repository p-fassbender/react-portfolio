import React, { useState } from 'react';
import Project from '../Project';

function Portfolio() {
    const [projects] = useState([
        {
            title: 'My Outdoor Space',
            src: require('../../images/my-outdoor-space-home.png'),
            githubLink: 'https://github.com/p-fassbender/my-outdoor-space',
            liveLink: '',
            technologies: ['MERN, GraphQL, Bootstrap, CSS, JWT, bcrypt'],
            description: 'Small team project for a MERN stack single-page application that works with real-world data to solve a real-world challenge, with a focus on user demand.'
        },
        {
            title: '3 Guys Pizza-n-Pies',
            src: require('../../images/3-guys-pizza-n-pies-screenshot.png'),
            githubLink: 'https://github.com/p-fassbender/3-guys-pizza-n-pies',
            liveLink: '',
            technologies: ['HTML5', 'JavaScript', 'CSS', 'Express', 'MySql', 'Bootstrap', 'Handlebars'],
            description: 'Small team project for an ecommerce website focused on full stack development following the MVC paradigm'
        },
        {
            title: 'National Parks Info and Weather',
            src: require('../../images/national-parks-screenshot.png'),
            githubLink: 'https://github.com/p-fassbender/national-parks-info-and-weather',
            liveLink: 'https://p-fassbender.github.io/national-parks-info-and-weather',
            technologies: ['HTML5', 'CSS', 'Foundation', 'JavaScript'],
            description: 'Small team project focused on creating an interactive website that integrated data recieved from multiple APIs '
        },
        {
            title: 'Social Network API',
            src: require('../../images/social-network-api-screenshot.png'),
            githubLink: 'https://github.com/p-fassbender/social-network-api',
            liveLink: '',
            technologies: ['JavaScript', 'Express', 'Mongoose', 'MongoDB'],
            description: 'Backend project focused on creating routes, controllers, and models using a NoSQL'
        },
        {
            title: 'Tech Blog',
            src: require('../../images/tech-blog-screenshot.png'),
            githubLink: 'https://github.com/p-fassbender/tech-blog',
            liveLink: '',
            technologies: ['HTML5', 'JavaScript', 'CSS', 'Express', 'MySql', 'Bootstrap', 'Handlebars'],
            description: 'App that follows the MVC paradigm using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication'
        },
        {
            title: 'Team Profile Generator',
            src: require('../../images/team-profile-generator-screenshot.png'),
            githubLink: 'https://github.com/p-fassbender/team-profile-generator',
            liveLink: '',
            technologies: ['HTML5', 'JavaScript', 'Node', 'OOP', 'TDD'],
            description: 'Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.'
        },
        {
            title: 'Professional Readme Generator',
            src: require('../../images/professional-readme-generator-screenshot.png'),
            githubLink: 'https://github.com/p-fassbender/professional-readme-generator',
            liveLink: '',
            technologies: ['Node', 'JavaScript', 'Inquirer'],
            description: 'Command-line application that dynamically generates a professional README.md file from a user\'s input using the Inquirer package'
        },
    ])

    return (
        <div className='container'>
            <Project projects={projects}></Project>
        </div>
    )
}

export default Portfolio;