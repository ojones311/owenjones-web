import React from 'react'
import Skills from '../Components/Skills.jsx'
import {useSpring, animated} from 'react-spring'
import '../Styles/Bio.css'

const Bio = () => {
    const fade = useSpring({opacity:1, from: {opacity:0}})
    return(
        <div className='about-page'>
            <div className='myphoto'>
                <img id='profile-pic' src='./pics/portfolio_pic.jpg' alt='Profile'></img>
            </div>
                <animated.div style={fade}>
                <div className='bio-container'> 
                    <p id='bio'>
                        I'm a Brooklyn based full stack web developer. When I'm not building web apps I love to snowboard, play soccer, solve puzzles, and cook. 
                    </p>
                    <p id='bio'> 
                        I'm building user-friendly experiences and exploring different technologies along the way. I use different frameworks and libraries, including React, Node, and PostgreSQL. 
                    </p>
                    <div className='resume'>
                        <a target= 'blank' href='https://docs.google.com/document/d/1Dm0UPHdxjRFAPbNWVOdtsnjxpHXK58VigH6fRZtaQoU/edit#heading=h.85r1lcob89ni'> Click to go to my Resume</a>
                    </div>
                    <h3 id='skills-heading'>Languages and Frameworks</h3>
                    <Skills />  
                </div>
                </animated.div> 
        </div>
    )
}




export default Bio 