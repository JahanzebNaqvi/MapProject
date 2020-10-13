import React from "react";
import { Container, Row, Col } from "react-bootstrap";
function Header() {
  let classTab = "activeTab Tab";
  return (
    <Container fluid>
      <Row>
        <Col>
          <Row>
            <Col md="4">logout</Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col className="Tab">QUEUED</Col>
            <Col className={classTab}>SCHEDULED</Col>
            <Col className="Tab">IN PROGRESS</Col>
            <Col className="Tab">COMPLETED</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
