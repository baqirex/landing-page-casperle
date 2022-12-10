import React from "react";
import { Container } from "react-bootstrap";

function ClientReview({ name, image, description }) {
  return (
    <div className="review d-flex m-5">
      <img src={image} height="400" width="400" />
      <div className="review-data">
        <p className="t-description description">{description}</p>
        <p className="client-name">- {name}</p>
      </div>
    </div>
  );
}

export default ClientReview;
