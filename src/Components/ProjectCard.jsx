import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import '../Styles/Projects.css'

const ProjectCard = (props) => {
    const { id, name, mission, github, live, images } = props
    return (
        <div id='card' >
            <h2 id='proj-title'>{name}</h2>
            <div className='card-image'>
                <img id='screenshot' src={images[0]} alt={name}></img>
            </div>
            <p id={'mission' + id}>{mission}</p>
            <div id='link-buttons' key={id}>
                <button id={name + '-githubbutton'} onClick={() => window.location.href = github}>Github</button>
                {live ?
                <button id={name + '-livebutton'} onClick={() => window.location.href = live}>Live</button> : null
                }
                <Link to={`/project/${name}`}><button id={name + '-morebutton'}>More</button></Link>
            </div>
        </div>
    )
}

export default withRouter(ProjectCard)