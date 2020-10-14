import React from "react";
import { Row, Col } from "react-bootstrap";
function Header() {
  let classTab = "activeTab Tab tabShadow";
  return (
    <Row className="header">
      <Col md="6" lg="6">
        <Row>
          <Col md="4" className="Tab">
            logout
          </Col>
        </Row>
      </Col>
      <Col md="6" lg="6">
        <Row>
          <Col className="Tab tabShadow">QUEUED</Col>
          <Col className={classTab}>SCHEDULED</Col>
          <Col className="Tab tabShadow">IN PROGRESS</Col>
          <Col className="Tab tabShadow">COMPLETED</Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Header;
