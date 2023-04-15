import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaWordpress } from "react-icons/fa";

function SelfIntro() {
  return (
    <Container
      fluid
      className="home-about-section  container-fluid"
      id="about"
      style={{ backgroundColor: "#0A81AB" }}
    >
      <Container>
        <Row>
          <Col md={16} className="home-about-description">
            <h1
              style={{
                fontSize: "2.6em",
                fontFamily: "Delicious Handrawn, cursive",
                fontWeight: "700",
              }}
            >
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi,👋 I'm{" "}
              <span style={{ color: "#FFF5EE", fontStyle: "italic" }}>
                Abhishek Goyal
              </span>{" "}
              an aspiring and determined{" "}
              <span style={{ color: "#FFF5EE", fontStyle: "italic" }}>
                Full Stack Web Developer
              </span>
              , curious to explore different industry-standard tech stacks and
              environments. Skilled in the{" "}
              <span style={{ color: "#FFF5EE", fontStyle: "italic" }}>
                MERN stack
              </span>{" "}
              and willing to start a career with an organization that provides
              an opportunity to improve skills and knowledge gained as well as
              to grow along with the organization’s goal.
              <br />
              <br />I developed passion for coding a few years back during
              lockdown when I make my own website on{" "}
              <span style={{ color: "#FFF5EE", fontStyle: "italic" }}>
                {" "}
                "WordPress <FaWordpress />"
              </span>{" "}
              , and my article got ranked on Google. Since then aesthetically
              functional websites has just been my thing.
            </p>
          </Col>
        </Row>
        <Row></Row>
      </Container>
    </Container>
  );
}
export default SelfIntro;
