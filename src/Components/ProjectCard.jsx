import React from 'react'
import ProjectDashboard from '../Components/ProjectDashboard'
import '../Styles/Projects.css'

const ProjectCard = (props) => {
    const {id, name, mission, github, live} = props

    return (
        <div id='card' >
            <h2 id='proj-title'>{name}</h2>
            <ProjectDashboard info={props}/>
            <p id={'mission' + id}>{mission}</p>
                <div id='link-buttons' key={id}>
                    <button id={name + '-githubbutton'} onClick={() =>  window.location.href = github}>Github</button>
                    <button id={name + '-livebutton'} onClick={() => window.location.href = live}>Live</button>
                </div>
        </div>
        )
}

export default ProjectCard