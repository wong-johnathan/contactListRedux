import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Row, Col, Card, CardTitle, Collapse, Button } from "reactstrap";

const CardSection = ({ title, children, noBorder = false, canCollapse = true }) => {
  const [open, setOpen] = useState(true);
  return (
    <Row>
      <Col>
        <Card body className={`shadow-sm ${noBorder && "p-0"} `}>
          <Row noGutters className={noBorder ? "px-4 py-2" : 'mb-2'}>
            <Col xs='auto' className='align-self-center'>
              <CardTitle tag='h5' className='mb-0'>
                {title}
              </CardTitle>
            </Col>
            <Col xs='auto' className='ml-auto align-self-center'>
              <Button onClick={() => (canCollapse ? setOpen(!open) : null)} color='noBg' size='sm' disabled={!canCollapse}>
                <FontAwesomeIcon icon={open ? faCaretUp : faCaretDown} color='primary' />
              </Button>
            </Col>
          </Row>
          <Collapse isOpen={open}>{children}</Collapse>
        </Card>
      </Col>
    </Row>
  );
};

export default CardSection;
