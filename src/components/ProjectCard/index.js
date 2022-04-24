import React from 'react'

function ProjectCard({ project, toggleModal}) {
    return (
        <div className='col-lg-4 col-md-6 d-flex justify-content-center my-3' >
            <div className="card"
                onClick={() => toggleModal(project)}
                data-bs-toggle="modal"
                data-bs-target="#projectModal"
            >
                <img src={project.src} alt={project.title} />
                <div className='seeMoreInfo'>
                    <h3>{project.title}</h3>
                    <p>Click for more information</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;