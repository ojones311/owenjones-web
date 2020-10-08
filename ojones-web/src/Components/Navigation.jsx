import React from 'react'


const Navigation = () => {
    return(
        <div className='navigation'>
            <div className='social-buttons'>
                <div id='first-sc'>
                    <a target='blank' href='https://github.com/ojones311'>
                            <img id='contact' src='./pics/GithubIcon.png' alt='Github'></img>
                    </a>
                    <p> My Github</p>
                </div>
                <div id='second-sc'>
                    <a target= 'blank' href='https://www.linkedin.com/in/owen-jones-92a848a6/'>
                    <img id='contact' src='./pics/linkedin.png' alt='LinkedIn'></img>
                    </a>
                    <p> My LinkedIn</p>
                </div>
                <div id='third-sc'>
                    <a target='blank' href='https://www.facebook.com/owen.jones.589'>
                    <img id='contact' src='./pics/facebook.png' alt='Facebook'></img>
                    </a>
                    <p>My Facebook</p>
                </div>
                <div id='fourth-sc'>
                    <a target='blank' href='https://twitter.com/owenthefirst93'>
                        <img id='contact' src='./pics/twitter.png' alt='Twitter'></img>
                    </a>
                    <p>My Twitter</p>
                </div>
            </div>
        </div>
    )
}


export default Navigation 