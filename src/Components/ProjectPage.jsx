import React, {useState} from 'react'
import ProjectCard from '../Components/ProjectCard'
import {withRouter} from 'react-router-dom'

const ProjectPage = (props) => {
    const [projectName, setProjectName] = useState('Choral')
    console.log(props)
    return(
        <div>
            <h3>{projectName} Project Page</h3>
            <ProjectCard  />
        </div>
    )
}


export default withRouter(ProjectPage)