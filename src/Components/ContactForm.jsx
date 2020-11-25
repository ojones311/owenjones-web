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
        console.log('form submitted')
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
            this.handleServerResponse(false, r.response.data.error, form)
        })
    }

    render(){
        return(
            <div className='contact-form'>
                <h4>Contact Me</h4>
                <div className='form'>
                    <form onSubmit={this.handleSubmit}>
                        <div id='form-email'>
                            <label htmlFor="email">Email : </label>
                            <input id="email" type="email" size='150px'name="email" required />
                        </div> 
                        <div id='form-message'>
                            <label htmlFor="message">Message : </label>
                            <textarea id="message" name="message"></textarea>
                        </div>
                        <button id='submit'type="submit" disabled={this.state.submitting}>
                            Submit
                        </button>
                        {this.state.status && (
                            <p className='form-msg'>{this.state.status.msg}</p>
                        )}
                    </form>
                </div>
            </div>
        )
    }
}


export default ContactForm