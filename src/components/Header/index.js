import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import logo from "assets/logo.png";
import { NAV_HEADER_HEIGHT } from "constants/variableTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { barBtn, ellipse } from "./header.module.css";

const Header = ({ width, maxWidth, toggleSideBar }) => {

  return (
    <>
      <div className='bg-primary shadow header d-flex align-items-center'>
        {width < maxWidth && <FontAwesomeIcon icon={faBars} color='white' className={barBtn} size='1x' onClick={toggleSideBar} />}
        <Navbar color='primary' style={{ height: NAV_HEADER_HEIGHT }} className='mx-auto px-3 py-2 flex-fill' expand='lg' dark>
          {width > maxWidth && <div className={ellipse} />}
          <NavbarBrand href='/' className='h-100'>
            <img src={logo} alt='3DCerts' className='p-0 h-100' />
          </NavbarBrand>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
