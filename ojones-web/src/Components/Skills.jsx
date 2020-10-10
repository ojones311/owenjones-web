import React from 'react'
import '../Styles/Bio.css'

const Skills = () => {
    return(
        <div className='skill-list'>
            <div id='js-icon'>
                <img id='icon' src='./pics/JSicon.png' alt='JS'></img>
            </div>
            <div id='html-icon'>
                <img id='icon' src='./pics/HTML5Icon.png' alt='HTML'></img>
            </div>       
            <div id='css-icon'>
                <img id='icon' src='./pics/CSS3Icon.png' alt='CSS'></img>
            </div> 
            <div id='nodejs-icon'>
                <img id='icon' src='./pics/NodejsIcon.png' alt='NODE'></img>
            </div>
            <div id='postgres-icon'>
                <img id='icon'  src='./pics/PostgreSQLIcon.png' alt='PG'></img>
            </div>
            <div id='react-icon'>
                <img id='icon' src='./pics/ReactIcon.png' alt='REACT'></img>
            </div>
            <div id='github-icon'>
                <img id='icon' src= './pics/GithubIcon.png' alt='GITHUB'></img>
            </div>
            <div id='git-icon' >
                <img id='icon' src='./pics/GitIcon.png' alt='GIT'></img>
            </div>
        </div>
    )
}


export default Skills 