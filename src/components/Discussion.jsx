import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import upIcon from "../images/icon-up-big-19-px@3x.png";
import "./styles/discussions.css";
const Discussion = () => {
  return (
    <div>
      <Container>
        <Row style={{ margin: "1rem 0 0 0" }}>
          <Col
            style={{
              marginRight: "3rem",
              height: "30rem",
              border: "1px solid red",
            }}
            sm={2}
          >
            <p>
              Daily Best <img src={upIcon} className="upIcon" alt="" />
            </p>
          </Col>
          <Col style={{ border: "1px solid red" }} sm={9}>
            <Badge className="badge" bg="light" text="dark">
              Routine Help
            </Badge>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Discussion;
