import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";

const ProfilePicture = ({ image, history }) => {
  const auth = useSelector(({ auth }) => auth);
  const [isOpen, setOpen] = useState(false);
  return (
    <div className='w-100 h-100 d-flex align-items-center'>
      <Dropdown isOpen={isOpen} toggle={() => setOpen(!isOpen)} className='w-100'>
        <DropdownToggle className='d-flex align-items-center text-decoration-none w-100 noFocus' color='#252525' style={{ paddingLeft: "0.75rem" }}>
          <FontAwesomeIcon color='white' icon={faUserCircle} className='mr-2' size='2x' />
          <p className='text-white mr-2 m-0'>{auth && auth.authUser.name}</p>
          <FontAwesomeIcon color='white' icon={faCaretDown} className='ml-auto mr-4' />
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem onClick={() => history.push("/dashboard/profile/settings")}>Profile</DropdownItem>
          <DropdownItem onClick={() => history.push("/dashboard/profile/change-password")}>Change Password</DropdownItem>
          <DropdownItem onClick={() => history.push("/sign-out")}>Sign out</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default withRouter(ProfilePicture);
