import React, { useState } from 'react';
import ProjectCard from '../ProjectCard';

function Project({ projects }) {
    const [currentProject, setCurrentProject] = useState("");

    let techlist;
    currentProject.technologies
        ? techlist = currentProject.technologies.join(", ")
        : techlist = ''

    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = (project) => {
        setCurrentProject({ ...project });
        setIsModalOpen(!isModalOpen);
    }

    return (
        <div className='row'>
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
                                style={{ width: '100%', height: 'auto' }}
                            />
                            <p>{currentProject.description}</p>
                            <p>
                                Technologies Used: <br />
                                {techlist}
                            </p>
                            <p>
                                See the GitHub: <br />
                                <a href={currentProject.githubLink} target={'_blank'} rel={'noreferrer'}>{currentProject.githubLink}</a>
                            </p>
                            <p>
                                Go to the website: <br />
                                {currentProject.liveLink
                                    ? <a href={currentProject.liveLink} target={'_blank'} rel={'noreferrer'}>{currentProject.liveLink}</a>
                                    : <>N/A</>
                                }
                            </p>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={toggleModal}>Close</button>
                        </div>
                    </div>
                </div>
            </div>

            {projects.map((project) => (
                <ProjectCard project={project} toggleModal={toggleModal} key={Math.floor(Math.random() * 100000)}></ProjectCard>
            ))}
        </div>
    )
}

export default Project;