import React,{Component} from 'react'


class ProjectDashboard extends Component {
    constructor(){
        super()
        this.state = {
            modalState : false
        }
    }

    openProjectDash = () => {
        this.setState({
            modalState: true
        })
    }

    closeProjectDash = () => {
        this.setState({
            modalState: false
        })
    }
    
    render(){
        const {modalState} = this.state
        return(
            <div class='dashboard'>
                
            </div>
        )
    }
}



export default ProjectDashboard