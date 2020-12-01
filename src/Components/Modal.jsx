import React from 'react'


const Modal = (props) => {
    if(props.modalState){
        return(
            <div className ='project-modal'>
                <p>{props.info.description}</p>
            </div>
        )
    }else {
        return(
            <div>

            </div>
        )
    }       
}


export default Modal