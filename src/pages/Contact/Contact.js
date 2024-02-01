import React from 'react';
import '../Contact/Contact.css';
import ContactUs from '../../assets/contact.avif';
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from 'react-icons/fa';

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
                <FaWhatsapp />
              </a>
              <a href=''>
                <FaFacebook />
              </a>
              <a
                href='https://www.instagram.com/kumar_shravan21/'
                target='_blank'
              >
                <FaInstagram />
              </a>
              <a href='https://twitter.com/rajshrvn' target='_blank'>
                <FaTwitter />
              </a>
              <a href='https://www.linkedin.com/in/skp2104/' target='_blank'>
                <FaLinkedin />
              </a>
              <a href='https://github.com/skp2104' target='_blank'>
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
