import React, { useState } from 'react';

function Project({ projects }) {
    const [currentProject, setCurrentProject] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = (project) => {
        setCurrentProject({ ...project });
        setIsModalOpen(!isModalOpen);
    }

    return (
        <div>
            <div tabIndex="-1" id="projectModal" className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{currentProject.title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={toggleModal}></button>
                        </div>
                        <div className="modal-body">
                            <img
                                src={currentProject.src}
                                alt={currentProject.title}
                                style={{width: '100%', height: 'auto'}}
                            />
                            <p>{currentProject.description}</p>
                            <p>{currentProject.githubLink}</p>
                            <p>{currentProject.liveLink}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={toggleModal}>Close</button>
                        </div>
                    </div>
                </div>
            </div>

            {projects.map((project) => (
                <div className="card" style={{ width: "18rem" }} key={Math.floor(Math.random() * 100000)}>
                    <img
                        src={project.src}
                        alt={project.title}
                        onClick={() => toggleModal(project)}
                        data-bs-toggle="modal"
                        data-bs-target="#projectModal"
                    />
                </div>
            ))}
        </div>
    )
}

export default Project;