import React from 'react';
import emailjs from 'emailjs-com';
import './Notification.css';

const Notification = () => {
    const sendEmail = () => {
        emailjs.sendForm(
            'YOUR_SERVICE_ID',
            'YOUR_TEMPLATE_ID',
            '#contact-form',
            'YOUR_USER_ID'
        )
        .then((result) => {
            console.log(result.text);
            alert('Email sent successfully!');
        }, (error) => {
            console.log(error.text);
            alert('Failed to send email. Please try again later.');
        });
    };

    return (
        <div className="ns-container">
            <h1 className="ns-h1">Working Contact Form</h1>
            <div className="ns-main">
                <form id="ns-contact-form">
                    <div className="ns-form-input">
                        <label htmlFor="ns-name">Name</label><br />
                        <input type="text" id="ns-name" name="name" placeholder="Enter your Name" />
                    </div>

                    <div className="ns-form-input">
                        <label htmlFor="ns-email">Email</label><br />
                        <input type="email" id="ns-email" name="email" placeholder="Enter your Email" />
                    </div>

                    <div className="ns-form-input">
                        <label htmlFor="ns-contact-number">Contact Number</label><br />
                        <input type="text" id="ns-contact-number" name="contact-number" placeholder="Enter your Contact number" />
                    </div>

                    <div className="ns-form-input">
                        <label htmlFor="ns-subject">Subject</label><br />
                        <input type="text" id="ns-subject" name="subject" placeholder="Enter your Subject" />
                    </div>

                    <div className="ns-form-input">
                        <label htmlFor="ns-message">Message</label><br />
                        <textarea id="ns-message" name="message" cols="31" rows="4"></textarea>
                    </div>

                    <div className="ns-form-input">
                        <button type="button" onClick={sendEmail}>Send Email</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Notification;
