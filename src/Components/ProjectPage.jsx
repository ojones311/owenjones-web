import React, {useState, useParams} from 'react'
import ImgCarousel from '../Components/ImgCarousel'
import '../Styles/ProjectPage.css'
import projectList from '../projects'
import {withRouter} from 'react-router-dom'


const ProjectPage = (props) => {
    const proj = projectList.find(elem => {
        return elem.name === props.match.params.name
    })
    console.log(proj)
    return(
        <div>
            <div className='projectpage-info'>
                <h3>{proj.name} Project Page</h3>
                <button onClick={()=> window.location.href = proj.github }>Github</button>
                <button onClick={() => window.location.href = proj.live}>Live</button>
                <p>{proj.mission}</p>
                <p>{proj.description}</p>
            </div>
            <ImgCarousel project={proj} />
        </div>
    )
}


export default withRouter(ProjectPage)