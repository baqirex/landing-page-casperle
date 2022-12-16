import React from "react";
import "./header.css";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../atoms/button";

function Header({ name, description, image }) {
  const handleBtnClick = () => {
    console.log("Button Clicked");
  };

  return (
    <Container className="header">
      <Row>
        <Col sm lg="6">
          <h1 className="profile-heading">
            Hi, <br /> I am <span className="myname">{name}</span>
          </h1>
          <p className="mydescription">{description}</p>
          <Button btntitle="Get in touch" handleBtnClick={handleBtnClick} />
        </Col>
        <Col sm lg="6">
          <img className="header-image img-fluid" src={image} />
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
