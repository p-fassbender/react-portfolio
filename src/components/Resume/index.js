import React from 'react';
import resumePDF from '../../images/Preston-Fassbender-Resume.pdf'

function Resume() {
    return (
        <section style={{ height: "85vh", overflow: "hidden" }}>
            <iframe src={resumePDF} width="100%" height="100%" title="Preston Fassbender's Resume"></iframe>
        </section>
    )
}

export default Resume;