import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'

class ProjectPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            project_name : ''
        }
    }
    render(){
        console.log('Proj page rendered',)
        return(
            <div>
                <h3>{this.state.project_name}Project Page</h3>
            </div>
        )
    }
}



export default withRouter(ProjectPage)