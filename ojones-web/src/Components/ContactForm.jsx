import React,{Component} from 'react'
import '../Styles/ContactForm.css'
import axios from 'axios'

class ContactForm extends Component {
    constructor(){
        super()
        this.state = {
            submitting: false,
            data: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleServerResponse = (ok, msg, form) => {
        this.setState({
            submitting: false,
            status: {ok, msg}
        })
        if(ok) {
            form.reset()
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target
        this.setState({
            submitting: true
        })
        axios({
            method: 'post',
            url: 'https://formspree.io/f/mwkwlpnp',
            data: new FormData(form)
        })
        .then(r => {
            this.handleServerResponse(true, 'Thanks !', form)
        })
        .catch(r => {
            this.handleServerRepsonse(false, r.response.data.error, form)
        })
    }

    render(){
        return(
            <div className='contact-form'>
                <h4>Contact Me</h4>
                <form onSubmit={this.handleOnSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input id="email" type="email" size='150px'name="email" required />
                    <br></br>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message"></textarea>
                    <br></br>
                    <button type="submit" >
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}


export default ContactForm