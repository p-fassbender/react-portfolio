import React from 'react';
import resumePDF from '../../images/Preston-Fassbender-Resume.pdf'

function Resume() {
    return (
        <section style={{height: "85vh", overflow:"hidden"}}>
            <h1>It's written resume, but it's pronounced resume.</h1>
            <iframe src={resumePDF} width="100%" height="100%" title='Preston Fassbender Resume'></iframe>
        </section>
    )
}

export default Resume;