import React from "react";
import { Button, Col, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { LOADING, ERROR, SUCCESS, INFO, CONFIRMATION } from "constants/modals";
const Modals = ({ type, title, isOpen, toggle, children, footer = true, action }) => {
  switch (type) {
    case LOADING:
      return (
        <Modal isOpen={isOpen} centered>
          <ModalHeader>{title ? title : "Loading"}</ModalHeader>
          <ModalBody>{children}</ModalBody>
        </Modal>
      );
    case ERROR:
      return (
        <Modal isOpen={isOpen} toggle={toggle} centered>
          <ModalHeader toggle={toggle} className='text-danger'>
            {title ? title : "Error"}
          </ModalHeader>
          <ModalBody>{children}</ModalBody>
          {footer && (
            <ModalFooter>
              <Col xs='12' md='auto'>
                <Button color='primary' block onClick={toggle}>
                  Close
                </Button>
              </Col>
            </ModalFooter>
          )}
        </Modal>
      );
    case SUCCESS:
      return (
        <Modal isOpen={isOpen} toggle={toggle} centered>
          <ModalHeader toggle={toggle}>{title ? title : "Success"}</ModalHeader>
          <ModalBody>{children}</ModalBody>{" "}
          {footer && (
            <ModalFooter>
              <Col xs='12' md='auto'>
                <Button color='primary' block onClick={toggle}>
                  Close
                </Button>
              </Col>
            </ModalFooter>
          )}
        </Modal>
      );
    case INFO:
      return (
        <Modal isOpen={isOpen} toggle={toggle} centered>
          <ModalHeader toggle={toggle}>{title ? title : "Info"}</ModalHeader>
          <ModalBody>{children}</ModalBody>{" "}
          {footer && (
            <ModalFooter>
              <Col xs='12' md='auto'>
                <Button color='primary' block onClick={toggle}>
                  Close
                </Button>
              </Col>
            </ModalFooter>
          )}
        </Modal>
      );
    case CONFIRMATION:
      return (
        <Modal isOpen={isOpen} toggle={toggle} centered>
          <ModalHeader toggle={toggle}>{title ? title : "Are you sure?"}</ModalHeader>
          <ModalBody>{children}</ModalBody>
          {footer && (
            <ModalFooter>
              <Col xs='12' md='auto'>
                <Button outline color='noBg' onClick={toggle} block>
                  Cancel
                </Button>
              </Col>
              <Col xs='12' md='auto'>
                <Button color='primary' onClick={action} block>
                  Confirm
                </Button>
              </Col>
            </ModalFooter>
          )}
        </Modal>
      );
    default:
      return null;
  }
};

export default Modals;
