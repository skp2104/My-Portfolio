import React from 'react';
import { FaBars } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import './Navbar.css';
import { useState } from 'react';
import Sidebar from '../../pages/Sidebar/Sidebar';
const Layout = ({ onToggleChange }) => {
  const [toggle, setToggle] = useState(false);

  //PROPS: Child to Parent
  const handleToggleClick = () => {
    const newToggleValue = !toggle;
    setToggle(newToggleValue);
    // Pass the updated toggle state to the parent
    onToggleChange(newToggleValue);
  };

  //PROPS: Parent to Child
  const handleToggleChange2 = (newToggleValue2) => {
    console.log('Toggle state in parent:', newToggleValue2);
    // Handle the toggle state in the parent component
    setToggle(newToggleValue2);
    onToggleChange(newToggleValue2);
  };
  return (
    <>
      <div className={toggle ? 'sidebar-menu-active ' : 'sidebar-menu'}>
        <div
          className={
            toggle ? 'sidebar-toggle-icon-active' : 'sidebar-toggle-icon'
          }
          onClick={handleToggleClick}
        >
          {toggle ? <RxCross2 /> : <FaBars />}
        </div>

        <Sidebar toggle={toggle} onToggleChange2={handleToggleChange2} />
      </div>
    </>
  );
};

export default Layout;
