import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import styles from './BulkSms.module.css'; // Import CSS file

function BulkSms() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_988mash', 'template_jqodw7j', form.current, 'FMph67DEqOsKuVGpT')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
      })
      .catch((error) => {
        console.error('Error sending email:', error.text);
      });

    // Clear the form after sending the email
    form.current.reset();
  };

  return (
    <div className={styles.container}> {/* Container for styling */}
      <h1>SMS Sending</h1>
      <form ref={form} onSubmit={sendEmail} className={styles.form}> {/* Apply styles */}
        <input name='user_email' type="email" placeholder='Email' required />
        <textarea name='message' placeholder='Write message...' required ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default BulkSms;
