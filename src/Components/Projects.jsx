import React, {Component} from 'react'
import ProjectCard from  './ProjectCard.jsx'
import '../Styles/Projects.css'


class Projects extends Component {
    constructor(){
        super()
        this.state = {
            projectList: [
                {
                    id: 0,
                    name: 'Choral',
                    description:'A Full Stack Web Application built with React and Express. Howler JS and the Web Audio API are used for audio processing. Media Player API is used for recording',
                    mission: 'Choral is a remote musical playground where multiple users can collaborate on a single song. Its our solution for remote musical collaboration',
                    github: 'https://github.com/PeterFiorentino/Choral',
                    live: 'https://choral.herokuapp.com/'
                },
                {
                    id: 1,
                    name: 'myTunes',
                    description:'A Full-StackWeb Application built with React and Nodejs. Using the Spotify Search API I can search albums and their metadata that I then cache in my PostgreSQL database. I use  React to display results and Nodejs to make requests to the Spotify API and my own backend',
                    mission:'Mytunes is a full-stack application in which users can post, comment on, and discuss albums that they are listening to.',
                    github:'https://github.com/ojones311/mytunes',
                    live:'https://mytunesoj.netlify.app/'
                },
                {   
                    id: 2,
                    name: 'MemeMe',
                    description: 'A Full-Stack Web Application built with React and Nodejs. Using React JS for the frontend and Express JS for the backend. A RESTful API that uses a PostgreSql for database management.' ,
                    mission: 'MemeMe is a social media site where users can post their favorite memes. Users can add friends and see the memes their friends post as well.',
                    github: 'https://github.com/ojones311/MemeMe',
                    live:'https://meme-me-ny.herokuapp.com/'
                },
                {   
                    id: 3,
                    name: 'Twitter-Clone',
                    description: 'A HTML and CSS Twitter Clone. Built with HTML and CSS.',
                    mission: ' A simple Twitter clone of their landing page.',
                    github: 'https://github.com/ojones311/Pursuit-Core-Web-Twitter-CSS-Assignment',
                    live:''
                }
            ]
        }
    }
    render(){
        const {projectList} = this.state
        return(
            <div className='container'>
                <h1 id='proj-title'>Recent Projects</h1>      
                <div className='project-map'>
                    {projectList.map(proj => {
                        return(
                            <ProjectCard key={proj.id} id={proj.id} name={proj.name} description={proj.description} mission={proj.mission} github={proj.github} live={proj.live} renderDescription={this.renderDescription}/>
                        )
                    })
                } 
                </div>
            </div>
        )
    }
}


export default Projects