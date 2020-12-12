import React from 'react'
import ProjectCard from  './ProjectCard.jsx'
import projectList from '../projects'
import '../Styles/Projects.css'


const Projects = () => {
    return(
        <div className='container'>
            <h1 id='proj-title'>Recent Projects</h1>      
            <div className='project-map'>
                {projectList.map(proj => {
                    return(
                        <ProjectCard key={proj.id} id={proj.id} name={proj.name} description={proj.description} mission={proj.mission} github={proj.github} live={proj.live} />
                    )
                })
            } 
            </div>
        </div>
    )
}

export default Projects