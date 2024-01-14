import React from 'react';
import './Sidebar.css';
import Picture from '../../assets/SKP.jpg';
import { FcHome, FcAbout } from 'react-icons/fc';
import { IoSchool } from 'react-icons/io5';
import { FcEngineering } from 'react-icons/fc';
import { GrProjects } from 'react-icons/gr';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { IoIosContact } from 'react-icons/io';
import { Link } from 'react-scroll';

const Sidebar = ({ toggle, onToggleChange2 }) => {
  const handleToggleClick2 = () => {
    const newToggleValue2 = !toggle;
    onToggleChange2(newToggleValue2);
  };

  return (
    <>
      {toggle ? (
        <>
          <div className='sidebar-section'>
            <div className='sidebar-image'>
              <img src={Picture} alt='' />
            </div>
            <div
              className={
                toggle ? 'sidebar-container-active' : 'sidebar-container'
              }
            >
              <Link
                to='Home'
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
              >
                <div
                  className='sidebar-icon-active'
                  onClick={handleToggleClick2}
                >
                  <FcHome />
                  <h3>Home</h3>
                </div>
              </Link>
              <Link
                to='About'
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
              >
                <div
                  className='sidebar-icon-active'
                  onClick={handleToggleClick2}
                >
                  <FcAbout />
                  <h3>About</h3>
                </div>
              </Link>
              <Link
                to='Education'
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
              >
                <div
                  className='sidebar-icon-active'
                  onClick={handleToggleClick2}
                >
                  <IoSchool />
                  <h3>Education</h3>
                </div>
              </Link>
              <Link
                to='TechStack'
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
              >
                <div
                  className='sidebar-icon-active'
                  onClick={handleToggleClick2}
                >
                  <FcEngineering />
                  <h3>Tech Stack</h3>
                </div>
              </Link>
              <Link
                to='Home'
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
              >
                <div
                  className='sidebar-icon-active'
                  onClick={handleToggleClick2}
                >
                  <GrProjects />
                  <h3>Projects</h3>
                </div>
              </Link>
              <Link
                to='Home'
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
              >
                <div
                  className='sidebar-icon-active'
                  onClick={handleToggleClick2}
                >
                  <MdOutlineWorkOutline />
                  <h3>Work Experience</h3>
                </div>
              </Link>
              <Link
                to='Contact'
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
              >
                <div
                  className='sidebar-icon-active'
                  onClick={handleToggleClick2}
                >
                  <IoIosContact />
                  <h3>Contact</h3>
                </div>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className={
              toggle ? 'sidebar-container-active' : 'sidebar-container'
            }
          >
            <Link
              to='Home'
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
            >
              <div className='sidebar-icon' title='Home'>
                <FcHome />
              </div>
            </Link>
            <Link
              to='About'
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
            >
              <div className='sidebar-icon' title='About'>
                <FcAbout />
              </div>
            </Link>
            <Link
              to='Education'
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
            >
              <div className='sidebar-icon' title='Education'>
                <IoSchool />
              </div>
            </Link>
            <Link
              to='TechStack'
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
            >
              <div className='sidebar-icon' title='Tech Stack'>
                <FcEngineering />
              </div>
            </Link>
            <Link
              to='Home'
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
            >
              <div className='sidebar-icon' title='Projects'>
                <GrProjects />
              </div>
            </Link>
            <Link
              to='Home'
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
            >
              <div className='sidebar-icon' title='Work Experience'>
                <MdOutlineWorkOutline />
              </div>
            </Link>
            <Link
              to='Contact'
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
            >
              <div className='sidebar-icon' title='Contact'>
                <IoIosContact />
              </div>
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default Sidebar;
