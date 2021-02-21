import React, { useEffect, useState } from "react";
import Sidebar from "components/Sidebar";
import Header from "components/Header";
import { backdrop, backdropClose } from "./index.module.css";
import Spacer from "components/Spacer";
// import getWindowSize from "utils/getWindowSize";

const Wrapper = ({ children }) => {
  const maxWidth = 780;
  const [width, setWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const updateSize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  });

  useEffect(() => (width < maxWidth ? setIsOpen(false) : null), [width]);

  return (
    <>
      {width < maxWidth && (
        <div>
          <div className={isOpen ? backdrop : backdropClose} onClick={() => setIsOpen(false)} />
          <Sidebar customStyle={{ position: "absolute", top: 0, left: 0, zIndex: 999, transform: isOpen ? "translateX(0)" : "translateX(-100%)" }} />
        </div>
      )}
      <div className='d-flex vh-100 overflow-hidden flex-row'>
        {width > maxWidth && <Sidebar />}
        <div className='d-flex w-100 flex-column overflow-hidden flex-nowrap'>
          <Header width={width} maxWidth={maxWidth} toggleSideBar={() => setIsOpen(!isOpen)} />
          <div style={{ overflowX: "hidden", overflowY: "auto", flex: "1 1" }} className='flex-nowrap d-flex flex-column'>
            <div style={{ flex: "1 1" }} className='mx-4 mt-4'>
              {children}
            </div>
            <Spacer />
            <div style={{ height: "50px", boxShadow: "0 0 5px 0 rgba(0,0,0,.26)", minHeight: "50px" }} className='bg-light d-flex align-items-center pl-4'>
              <p className='m-0 text-muted' style={{fontSize:'0.8rem'}}>Copyright 3DCerts © 2020</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wrapper;
