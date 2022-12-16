import React from "react";
import "./companies.css";
import { Col, Container, Row } from "react-bootstrap";
import Heading from "../../components/atoms/heading";
import Description from "../../components/atoms/description";

function Companies({ heading, description, companies }) {
  return (
    <Container>
      <Row>
        <Col>
          <div className="text-center">
            <Heading heading={heading} />
            <Description description={description} />
          </div>
          <div>
            <ul className="companies">
              {companies.map((company) => (
                <li className="b" key={company.id}>
                  <img src={company.image} alt="" />
                </li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Companies;
