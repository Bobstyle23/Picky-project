import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import upIcon from "../images/icon-up-big-19-px@3x.png";
import downIcon from "../images/icon-down-big-19-px@3x.png";
import data from "../data/discussion.json";
import "./styles/discussions.css";

const Discussion = () => {
  const items = data;

  return (
    <div>
      <Container>
        <Row style={{ margin: "1rem 0 0 0" }}>
          <Col className="col1" sm={2}>
            <p className="col-1-head">
              <img
                style={{
                  width: "1rem",
                  height: "1rem",
                  marginTop: "-0.35rem",
                  marginRight: "0.2rem",
                }}
                src="https://www.gopicky.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdailybest.b3cc9b95.svg&w=3840&q=75"
                alt=""
              />
              Daily Best <img src={upIcon} className="upIcon" alt="" />
            </p>
            <p className="col-1-text1">All</p>
            <p className="col-1-text">Skin Concern</p>
            <p className="col-1-text">Product Info</p>
            <p className="col-1-text">Routine Help</p>
            <p className="col-1-text">Ingredients</p>
            <p className="col-1-text">Deals & News</p>
            <p className="col-1-text">Brand Talk</p>
            <p className="col-1-text">Opinion</p>

            <p className="col-1-features">Featured</p>
            <p className="col-1-features">Skin Concern</p>
            <p className="col-1-features">Product Info</p>
            <p className="col-1-features">Routine Help</p>
            <p className="col-1-features">Ingredients</p>
            <p className="col-1-features">Deals & News</p>
            <p className="col-1-features">Brand Talk</p>
            <p className="col-1-features">Opinion</p>
            <p className="col-1-features">Giveaways</p>
            <p className="col-1-features">Connect</p>
            <p className="col-1-features">Other</p>
            <p className="col-1-features">
              Groups <img className="downIcon" src={downIcon} alt="" />
            </p>
          </Col>
          <Col className="col2">
            <p className="badge">Routine Help</p>

            <img
              className="profile-img"
              src="https://www.gopicky.com/_next/image?url=https%3A%2F%2Fd3nf6fs21wype6.cloudfront.net%2Fusers%2F162127.20211117134518.jpg&w=96&q=75"
              alt=""
            />

            <img
              className="profile-img-badge"
              src="https://www.gopicky.com/images/user_role/super_picky.webp"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Discussion;
