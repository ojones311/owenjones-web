import React, {Component} from 'react'


class ProjectPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            project_name : props.project_name
        }
    }
    render(){
        return(
            <div>
                <h3>{this.props.project_name}Project Page</h3>
            </div>
        )
    }
}

// const ProjectPage = ({info}) => {
//     let history = useHistory()

//     const redirectToProjectPage = () => {
//         if(info.name){
//             history.push(`/projects/${info.name}`)
//         }
//     }
// }



export default ProjectPage