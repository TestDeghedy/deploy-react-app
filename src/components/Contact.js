import React, { Component, Fragment } from 'react'
import Footer from "./Footer";

class Contact extends Component {
    render () {
        return (
            <Fragment>

            <div className="contact-container">
                <div className="contact-text">
                    <div className="contact-text-primary">
                        Get in touch with me
                    </div>
                    <div className="contact-text-secondary">
                        For any work opportunities
                    </div>
                </div>

                <form className="contact-form" action="https://formsubmit.co/abdelrahman.deghedy@gmail.com" method="POST" onSubmit={this.handleSubmit}>
                    <div className="contact-form-item">
                        <label className="contact-form-item-label" htmlFor="fname">
                            First Name
                        </label>
                        <input 
                            className="contact-form-item-input"
                            type="text"
                            id="fname"
                            name="fname"
                            placeholder="Enter Your First Name"
                            required
                        />
                    </div>

                    <div className="contact-form-item">
                        <label className="contact-form-item-label" htmlFor="lname">
                            Last Name
                        </label>
                        <input 
                            className="contact-form-item-input"
                            type="text"
                            id="lname"
                            name="lname"
                            placeholder="Enter Your Last Name"
                            required
                        />
                    </div>

                    <div className="contact-form-item">
                        <label className="contact-form-item-label" htmlFor="email">
                            Email
                        </label>
                        <input 
                            className="contact-form-item-input"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter Your Email"
                            required
                        />
                    </div>

                    <div className="contact-form-item">
                        <label className="contact-form-item-label" htmlFor="content">
                            Content
                        </label>
                        <textarea 
                            className="contact-form-item-input contact-form-item-input-content" 
                            type="text"
                            id="content"
                            name="content"
                            placeholder="Enter Your Message"
                            required
                        >
                        </textarea>
                    </div>

                    <div className="submission-handle">
                        <input 
                            type="hidden"
                            name="_next"
                            value="http://localhost:3000/"
                        />

                        <input 
                        type="hidden" 
                        name="_captcha" 
                        value="false"
                        />

                        <input 
                        type="hidden" 
                        name="_autoresponse" 
                        value="Thanks you for reaching out! I'm excited to talk to you, and I will try to contact you as soon as possible."
                        />

                    </div>


                    <button className="contact-form-button" type="submit">
                        Submit
                    </button>

                </form>
            </div>
            <Footer />
            </Fragment>
        )
    }
}

export default Contact;