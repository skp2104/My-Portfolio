import React from 'react';
import '../Contact/Contact.css';
import { FaGithub } from 'react-icons/fa';
import ContactUs from '../../assets/contact-us.jpg';
import fb from '../../assets/fb.jpg';
import insta from '../../assets/instagram.jpg';
import twitter from '../../assets/twitter.jpg';
import github from '../../assets/github.png';
import watsapp from '../../assets/whatsapp.png';
import linkedin from '../../assets/linkedin.jpg';

const Contact = () => {
  return (
    <>
      <div className='contact-section page-width' id='Contact'>
        <h1>Contact</h1>
        <div className='contact-container'>
          <div className='contact-img'>
            <img src={ContactUs} alt='' />
          </div>
          <div className='contact-social'>
            <h2>Connect with Me on:</h2>
            <div className='contact-social-icon'>
              <a href='tel:6290669979'>
                <img src={watsapp} alt='' />
              </a>
              <a href='https://www.facebook.com/shravan.don/' target='_blank'>
                <img src={fb} alt='' />
              </a>
              <a
                href='https://www.instagram.com/kumar_shravan21/'
                target='_blank'
              >
                <img src={insta} alt='' />
              </a>
              <a href='https://twitter.com/rajshrvn' target='_blank'>
                <img src={twitter} alt='' />
              </a>
              <a href='https://www.linkedin.com/in/skp2104/' target='_blank'>
                <img src={linkedin} alt='' />
              </a>
              <a href='https://github.com/skp2104' target='_blank'>
                <img src={github} alt='' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
