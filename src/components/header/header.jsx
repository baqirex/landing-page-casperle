import React from "react";
import "./header.css";
import profile from "../../images/profile.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <Container className="header">
      <Row>
        <Col sm lg="6">
          <h1 className="profile-heading">
            Hi, <br /> I am <span className="myname">Casper Le</span>
          </h1>
          <p className="mydescription">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
            doloribus veritatis, repudiandae non tempore blanditiis?
          </p>
          <Button className="mybtn">
            Get in touch
            <FontAwesomeIcon icon={faArrowRight} className="mx-1" />
          </Button>
        </Col>
        <Col sm lg="6">
          <img
            className="header-image"
            src={profile}
            width="500"
            height="400"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
