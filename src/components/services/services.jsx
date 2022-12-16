import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./services.css";

import Heading from "../atoms/heading";
import Description from "../atoms/description";

import CardComponent from "../common/cardcomponent";

function Services({ heading, description, services }) {
  return (
    <Container id="services m-top">
      <Row>
        <Col className="text-center">
          <Heading heading={heading} />
          <Description description={description} />
        </Col>
      </Row>
      <div className="card-container">
        {services.map((service) => (
          <CardComponent
            key={service.id}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </Container>
  );
}

export default Services;
