import React,{Component} from 'react'
import {Redirect} from 'react-router-dom'
import Modal from '../Components/Modal'

class ProjectDashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            modalState : false,
            redirect: null
        }
    }

    linkToProjectPage = () => {
        this.setState({
            redirect: `/project/${this.props.info.name}`
        })
        console.log(this.props)
    }

    render(){
        if(this.state.redirect){
            return(
                <Redirect to={this.state.redirect}/>
            )
        }else{
            return(
                <div class='dashboard'>
                    <p onClick={this.linkToProjectPage}>More</p>
                    <div>
                        <Modal modalState={this.state.modalState} info={this.props.info}/>
                    </div>
                </div>
            )
        }
        
    }
}



export default ProjectDashboard