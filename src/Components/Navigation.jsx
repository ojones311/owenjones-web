import React from 'react'
import '../Styles/Navigation.css'

const Navigation = () => {
    return(
        <div className='navigation'>
            <div className='social-buttons'>
                <div id='first-sc'>
                    <a target='blank' href='https://github.com/ojones311'>
                        <img id='contact' src='./pics/GithubIcon.png' alt='Github'></img>
                    </a>
                </div>
                <div id='second-sc'>
                    <a target= 'blank' href='https://www.linkedin.com/in/owen-jones-92a848a6/'>
                    <img id='contact' src='./pics/linkedin.png' alt='LinkedIn'></img>
                    </a>
                </div>
                <div id='third-sc'>
                    <a target='blank' href='https://www.facebook.com/owen.jones.589'>
                    <img id='contact' src='./pics/facebook.png' alt='Facebook'></img>
                    </a>
                </div>
                <div id='fourth-sc'>
                    <a target='blank' href='https://twitter.com/owenthefirst93'>
                        <img id='contact' src='./pics/twitter.png' alt='Twitter'></img>
                    </a>
                </div>
            </div>
        </div>
    )
}


export default Navigation 