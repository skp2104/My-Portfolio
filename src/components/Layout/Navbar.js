import React from 'react';
import { FaBars } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import './Navbar.css';
import { useState } from 'react';
import Sidebar from '../../pages/Sidebar/Sidebar';
const Layout = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className={toggle ? 'sidebar-menu-active ' : 'sidebar-menu'}>
        <div
          className={
            toggle ? 'sidebar-toggle-icon-active' : 'sidebar-toggle-icon'
          }
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? <RxCross2 /> : <FaBars />}
        </div>

        <Sidebar toggle={toggle} />
      </div>
    </>
  );
};

export default Layout;
