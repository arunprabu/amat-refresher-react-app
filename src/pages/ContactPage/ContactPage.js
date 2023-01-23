import React from 'react'
import ContactForm1 from './ContactForm1/ContactForm1';
import ContactForm2 from './ContactForm2/ContactForm2';

const ContactPage = () => {

  

  return (
    <div className="row">
      <h1>Contact us</h1>
      <h2>Demo of Fn comp</h2>
      <ContactForm1 />
      <hr/>
      <h2 className='mt-3'>Demo of Class comp</h2>
      <ContactForm2 />
    </div>
  );
}

export default ContactPage