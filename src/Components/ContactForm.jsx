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
        // if(false){
        //     return(
        //         <div className='contact-form'>
        //             <h4>Contact Me</h4>
        //             <div className='form'>
        //                 <form onSubmit={this.handleSubmit}>
        //                     <div id='form-email'>
        //                         {/* <label htmlFor="email">Email : </label> */}
        //                         <h4 id='email-label'>Email:</h4>
        //                         <input id="email" type="email" size='550px'name="email" required />
        //                     </div> 
        //                     <div id='form-message'>
        //                         {/* <label htmlFor="message">Message : </label><br></br> */}
        //                         <h4 id='message-label'>Message:</h4>
        //                         <textarea rows='8' id="message" name="message" ></textarea>
        //                     </div>
        //                     <button id='submit'type="submit" disabled={this.state.submitting}>
        //                         Submit
        //                     </button>
        //                     {this.state.status && (
        //                         <p className='form-msg'>{this.state.status.msg}</p>
        //                     )}
        //                 </form>
        //             </div>
        //         </div>
        //     )
        // }else{
            return(
                <div className='contact-form'>
                    <h3 id='contact-title'>Contact Me</h3>
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
            )
        // }
    }
}


export default ContactForm