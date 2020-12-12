import React from 'react'
import {useHistory, useLocation} from 'react-router-dom'
import {useSpring, animated} from 'react-spring'
import '../App.css'

const Heading = () => {
    const history = useHistory()
    const location = useLocation()
    const props = useSpring({opacity: 1, from: {opacity: 0}})

    if(location.pathname === '/'){
        return(
            <animated.div style={props}>
                <div className='heading1'>
                    <h1>Hi, I'm Owen Jones</h1>
                </div>
            </animated.div>
        )
    }else{
        return(
            <div className='heading2'>
                <h1 onClick={()=>{history.push('/')}}>Hi, I'm Owen Jones</h1>
            </div>
        )
    }
}


export default Heading