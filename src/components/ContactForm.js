import React from 'react'
import '../styles/contact.css'

const ContactForm = () => {
  return (
    <main className="wrapper">
        <section className="section" id="contact">
            <div className="top-header">
                <h1>Let's work together</h1>
                <span>Are you thinking about any project you want to build to life?, contact me !</span>
            </div>

            <div className="row">
                <div className="col">
                    <div className="contact-info">
                        <h2>Do not hesitate to connect<i className="uil uil-corner-right-down"></i></h2>
                        <p><i className="uil uil-envelope"></i>eugenecosby133@gmail.com</p>
                        <p><i className="uil uil-phone"></i>phone: +233545108933</p>
                    </div>
                </div>

                <div className="col">
                    <div className="form-control">
                        <div className="form-inputs">
                            <input type="text" id="input-field" placeholder="your name"></input>
                            <input type="text" id="input-field" placeholder="your email"></input>
                        </div>

                        <div className="text-area">
                            <input className="input-subject" type="text" placeholder="subject"></input>
                            <textarea id="input-text" placeholder="message"></textarea>
                        </div>

                        <div className="form-btn">
                            <button className="btn">Send<i className="uil uil-message"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default ContactForm
