import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./clientreview.css";

function ClientReview({ name, image, comment }) {
  return (
    <Container className="client-review">
      <Row>
        <Col sm lg="6">
          <img className="client-img img-fluid" src={image} />
        </Col>
        <Col sm lg="6">
          <p className="t-description description">{comment}</p>
          <p className="client-name">- {name}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default ClientReview;
