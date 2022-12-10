import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./services.css";

import webdev from "../../images/web-development.svg";
import mobile from "../../images/mobile-app.svg";
import maintenance from "../../images/maintenance.svg";
import CardComponent from "../common/cardcomponent";

function Services() {
  return (
    <Container id="services">
      <Row>
        <Col className="text-center">
          <h1 className="heading">Services I offer</h1>
          <p className="description">
            I help ambitious business like your generate more profits by
            providing my best services
          </p>
        </Col>
      </Row>
      <div className="card-container">
        <CardComponent
          image={webdev}
          title="Web Development"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsum laudantium dicta ad, tempora incidunt!"
        />
        <CardComponent
          image={mobile}
          title="Mobile Apps"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsum laudantium dicta ad, tempora incidunt!"
        />
        <CardComponent
          image={maintenance}
          title="Maintenance"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsum laudantium dicta ad, tempora incidunt!"
        />
      </div>
    </Container>
  );
}

export default Services;
