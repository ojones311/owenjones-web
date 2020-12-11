import React from 'react'
import {useHistory} from 'react-router-dom'

const Heading = () => {
    
    const history = useHistory()

    return(
        <div>
            <h1 onClick={()=>{history.goBack()}}>Hi, I'm Owen Jones</h1>
        </div>
    )
}


export default Heading