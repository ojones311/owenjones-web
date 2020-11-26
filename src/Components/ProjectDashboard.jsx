import React,{Component} from 'react'
import Modal from '../Components/Modal'

class ProjectDashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            modalState : false
        }
    }

    toggleProjectDash = () => {
        this.setState({
            modalState: !this.state.modalState
        })
        console.log(this.state.modalState)
        console.log(this.props)
    }

    render(){
        return(
            <div class='dashboard'>
                <p onClick={this.toggleProjectDash}>Expand</p>
                <div>
                    <Modal modalState={this.state.modalState} info={this.props.info}/>
                </div>
            </div>
        )
    }
}



export default ProjectDashboard