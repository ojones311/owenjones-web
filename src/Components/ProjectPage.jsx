import React, {useState, useParams} from 'react'
import ImgCarousel from '../Components/ImgCarousel'
import projectList from '../projects'
import {withRouter} from 'react-router-dom'


const ProjectPage = (props) => {
    const proj = projectList.find(elem => {
        return elem.name === props.match.params.name
    })
    console.log(props)
    return(
        <div>
            <h3>{proj.name} Project Page</h3>
            <p>{proj.mission}</p>
            <p>{proj.description}</p>
            <ImgCarousel project={proj}/>
        </div>
    )
}


export default withRouter(ProjectPage)