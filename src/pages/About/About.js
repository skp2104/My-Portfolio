import React from 'react';
import '../About/About.css';
import Picture from '../../assets/SKP.jpg';

const About = () => {
  return (
    <>
      <div className='about-me-section page-width' id='About'>
        <img src={Picture} alt='' />
        <div className='about-me--content'>
          <h3>𝓐𝓫𝓸𝓾𝓽 𝓜𝓮</h3>
          <p>
            𝓘 𝓪𝓶 𝓪 𝓢𝓸𝓯𝓽𝔀𝓪𝓻𝓮 𝓔𝓷𝓰𝓲𝓷𝓮𝓮𝓻 𝔀𝓲𝓽𝓱 2+ 𝓨𝓮𝓪𝓻𝓼 𝓸𝓯 𝓮𝔁𝓹𝓮𝓻𝓲𝓮𝓷𝓬𝓮 𝓲𝓷 𝓤𝓼𝓮𝓻
            𝓘𝓷𝓽𝓮𝓻𝓯𝓪𝓬𝓮 𝓓𝓮𝓼𝓲𝓰𝓷, 𝓐𝓹𝓹𝓵𝓲𝓬𝓪𝓽𝓲𝓸𝓷 𝓓𝓮𝓿𝓮𝓵𝓸𝓹𝓶𝓮𝓷𝓽 𝓪𝓷𝓭 𝓦𝓮𝓫 𝓓𝓮𝓿𝓮𝓵𝓸𝓹𝓶𝓮𝓷𝓽
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
