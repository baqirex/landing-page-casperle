import React from "react";
import "./cardcomponent.css";
import { Card } from "react-bootstrap";

function CardComponent({ image, title, description }) {
  return (
    <Card className="card" style={{ width: "18rem", height: "22rem" }}>
      <Card.Img className="card-img" variant="top" src={image} height="150px" />
      <Card.Body className="text-center">
        <Card.Title className="card-title">{title}</Card.Title>
        <Card.Text className="card-text">{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
