import React from 'react';
import '../Home/Home.css';
import Typewriter from 'typewriter-effect';
import Resume from '../../assets/Resume.pdf';
import { Link } from 'react-scroll';
const Home = () => {
  return (
    <>
      <div className='home-page page-width' id='Home'>
        <h2>Hi 👋 I'm a</h2>
        <h1>
          <Typewriter
            options={{
              strings: [
                'Full Stack Developer',
                'MERN Stack Developer',
                'React Developer',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <div className='home-page--button'>
          <Link
            to='Contact'
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
          >
            <button>Hire Me</button>
          </Link>
          <a href={Resume} download='Shravan.pdf'>
            Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
