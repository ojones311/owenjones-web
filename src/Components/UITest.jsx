import React  from 'react'
import Navigation from '../Components/Navigation.jsx'
import Bio from '../Components/Bio.jsx'
import Projects from '../Components/Projects.jsx'
import ContactForm from '../Components/ContactForm.jsx'


const UITest = () => {
    return(
        <div className='interface'>
            <Bio />
            <div className='border-div'> </div>
            <Projects />
            <div className='border-div'> </div>
            
            <ContactForm />
            <Navigation />
        </div>
    )
}


export default UITest