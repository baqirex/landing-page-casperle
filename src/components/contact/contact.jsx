import React from "react";
import "./contact.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function Contact() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="contact text-center">
            <h1 className="heading">Let's make something amzing</h1>
            <p className="description">Write to me</p>
          </div>
          <div className="input-form">
            <input
              className="input-field"
              type="text"
              placeholder="Enter Your message here"
            />
            <Button className="mybtn gt">Get a quote</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
