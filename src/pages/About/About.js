import React from 'react';
import '../About/About.css';
import Fade from 'react-reveal/Fade';
import RubberBand from 'react-reveal/RubberBand';
import Picture from '../../assets/SKP.jpg';

const About = () => {
  return (
    <>
      <div className='about-me-section page-width' id='About'>
        <img src={Picture} alt='' />
        <div className='about-me--content'>
          <RubberBand>
            <h3>About Me</h3>
          </RubberBand>

          <Fade right>
            <p>
              𝕴 𝖆𝖒 𝖆 𝕾𝖔𝖋𝖙𝖜𝖆𝖗𝖊 𝕯𝖊𝖛𝖊𝖑𝖔𝖕𝖊𝖗 𝖜𝖎𝖙𝖍 2+ 𝖞𝖊𝖆𝖗𝖘 𝖔𝖋 𝖊𝖝𝖕𝖊𝖗𝖎𝖊𝖓𝖈𝖊 𝖎𝖓 𝖀𝖘𝖊𝖗
              𝕴𝖓𝖙𝖊𝖗𝖋𝖆𝖈𝖊 𝕯𝖊𝖘𝖎𝖌𝖓, 𝕬𝖕𝖕𝖑𝖎𝖈𝖆𝖙𝖎𝖔𝖓 𝕯𝖊𝖛𝖊𝖑𝖔𝖕𝖒𝖊𝖓𝖙 𝖆𝖓𝖉 𝖂𝖊𝖇 𝕯𝖊𝖛𝖊𝖑𝖔𝖕𝖒𝖊𝖓𝖙.
            </p>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default About;
