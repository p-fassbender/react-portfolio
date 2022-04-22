import React, { useState } from 'react';

function Project({ projects }) {
    const [currentProject, setCurrentProject] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = (project) => {
        setCurrentProject({ ...project });
        setIsModalOpen(!isModalOpen);
    }

    return (
        <div>
            {projects.map((project) => (
                <div className="card" style={{ width: "18rem" }}>
                    <img
                        src={project.src}
                        alt={project.title}
                        className=""
                        key={Math.floor(Math.random() * 100000)}
                    // onClick={() => toggleModal(project, i)}
                    />
                </div>
            ))}
        </div>
    )
}

export default Project;