import React from "react";
import { Row, Col, Card, CardTitle } from "reactstrap";

const ComponentTitle = ({ title }) => {
  return (
    <Row>
      <Col>
        <Card body className='shadow-sm'>
          <CardTitle tag='h4' className='mb-0'>
            {title}
          </CardTitle>
        </Card>
      </Col>
    </Row>
  );
};

export default ComponentTitle;
