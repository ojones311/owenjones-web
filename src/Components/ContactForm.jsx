import React,{Component} from 'react'
import '../Styles/ContactForm.css'
import '../Styles/form-reset.css'
import axios from 'axios'

class ContactForm extends Component {
    constructor(){
        super()
        this.state = {
            submitting: false,
            data: null,
            form_id: 'mwkwlpnp'
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
        <>
         <h2 id='contact-title'>Contact Me</h2> 
            <div className='contact-form'>
                <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" onSubmit={this.handleSubmit}>
                    <fieldset id="fs-frm-inputs">
                        <label for="full-name">Full Name</label>
                        <input type="text" name="name" id="full-name" placeholder="First and Last" required=""/>
                        <label for="email-address">Email Address</label>
                        <input type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required=""/>
                        <label for="message">Message</label>
                        <textarea rows="5" name="message" id="message" placeholder="Message here" required=""></textarea>
                        <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"/>
                    </fieldset>
                    <input type="submit" value="Submit"/>
                    {this.state.status && (
                            <p className='form-msg'>{this.state.status.msg}</p>
                        )}
                </form>
            </div>
            </>
        )
    }
}


export default ContactForm