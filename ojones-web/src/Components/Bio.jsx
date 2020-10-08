import React from 'react'
import {useSpring, animated} from 'react-spring'
import '../Styles/Bio.css'

const Bio = () => {
    const fade = useSpring({opacity:1, from: {opacity:0}})
    return(
        <div className='about-page'>
            <animated.div style={fade}>
            <div className='bio-container'> 
                <p id='bio'>
                    I'm residing in Bushwick {'=>'} Brooklyn,NY. When I'm not building web apps I love to snowboard, play soccer, solve puzzles, and cook. 
                 </p>
                 <p id='bio'> 
                     I'm building user-friendly experiences and exploring different technologies along the way. Different frameworks and libraries like React, Node, and PostgreSQL. 
                </p>  
            </div>
            </animated.div>
        </div>
    )
}





export default Bio 