import React, { useState } from "react";
import { Row, Col, Nav, NavItem, Collapse } from "reactstrap";
import { NavLink, withRouter } from "react-router-dom";
import "./sidebar.css";
import { NAV_HEADER_HEIGHT } from "constants/variableTypes";
// import ProfilePicture from "components/ProfilePicture";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import initialMenuItems from "./initialMenu.json";

const Sidebar = ({ customStyle, location }) => {
  const { pathname } = location;
  const [menuItems] = useState(initialMenuItems);

  const CollapseItem = ({ text, children = [] }) => {
    const [isOpen, setOpen] = useState(children.map((child) => child.link).includes(pathname) ? true : false);
    return (
      <>
        <div className='w-100 h-100 collapseGroup' style={isOpen ? { backgroundColor: "#252525" } : { transition: "1s all" }}>
          <NavItem onClick={() => setOpen(!isOpen)} style={{ marginTop: 0 }}>
            {text} <FontAwesomeIcon icon={isOpen ? faCaretUp : faCaretDown} color='white' className='ml-auto mr-4' />
          </NavItem>
          <div className='collapseChildren'>
            <Collapse isOpen={isOpen}>
              {children.map((child, index) => (
                <Item key={index} link={child.link} text={child.text} />
              ))}
            </Collapse>
          </div>
        </div>
      </>
    );
  };

  const Item = ({ link, text }) => {
    return (
      <NavItem className={pathname === link ? "active" : undefined}>
        <NavLink to={link}>{text}</NavLink>
      </NavItem>
    );
  };

  return (
    <div className='sidebarWrapper' style={{ backgroundColor: "#313131", ...customStyle }}>
      <Row style={{ minHeight: NAV_HEADER_HEIGHT, background: "#252525" }} noGutters>
        <Col>{/* <ProfilePicture /> */}</Col>
      </Row>
      <div className='sidebarContent'>
        <p className='text-white mb-2 cursor-none' style={{ fontSize: "0.65rem" }}>
          MAIN
        </p>
        <Nav vertical>
          {menuItems.map((menuItem, index) => {
            switch (menuItem.type) {
              case "menu":
                return <CollapseItem text={menuItem.text} children={menuItem.children} key={index} />;
              case "item":
                return <Item text={menuItem.text} link={menuItem.link} key={index} />;
              default:
                return undefined;
            }
          })}
        </Nav>
      </div>
    </div>
  );
};

export default withRouter(Sidebar);
