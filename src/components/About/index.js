import React from 'react';
import portraitPhoto from '../../images/portrait.jpg';

function About() {
    return (
        <div className='container'>
            <div className='row'>
                <h2>About Me</h2>
            </div>
            <div className='row'>
                <div className='col d-flex justify-content-center'>
                    <img src={portraitPhoto} alt="Preston Fassbender's face" style={{ width: "400px", height: "500px" }} />
                </div>
                <div className='col'>
                    <p>
                        My name is Preston. I am a full stack developer. I live in the smaller town of Richfield, WI, but I feel most at home in front of my computer.
                        I spent 4 years studying Applied Mathematics and Computer Science at the University of Wisconsin - Stout with a concentration in Software Development, and I also have a certificate in Full Stack Web Development through the University of Wisconsin Extended Campus Coding Bootcamp.
                        <br /><br />
                        I am fueled by my passion for learning and consider myself a 'forever student,' eager to build on my academic foundation and stay up-to-date with the latest and greatest web technologies.
                        <br /><br />
                        My favorite pastime is working out at the gym. From constantly challenging and pushing myself, to the accomplishment felt by achieving my goals through hard work and dedication,
                        I always find myself improving both physically and mentally.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default About;