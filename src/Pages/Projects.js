import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "../Components/ProjectCards/ProjectCards";

function Projects() {
  return (
    <Container
      id="projects"
      fluid
      className="project-section"
      style={{ backgroundColor: "#0A81AB" }}
    >
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "black" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="/images/Crwn-clothing.png"
              title="Crwn-Clothing E-Commerce website"
              description="Crwn Clothing is a E-Commerce Clothing website , its suitable for a Fashion shop or any kind of online store, With a grid layout for the Homepage,SignIn with Google, Checkout section and its fully responsive, built with ReactJs & SCSS"
              tech="Tech-Stacks"
              techD=" React | SCSS | Google-FireBase "
              link="https://crwn-clothing-abby.netlify.app/"
              a="https://github.com/abbygoyal/crwn-clothing.git"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="/images/Nike E-Commerce.png"
              title="Sneakers E-Commerce Website"
              description="Nike E-Commerce Clothing website,Quick minimalistic nike-shoes design concept it is an Globally  Shoes and Clothing company"
              tech="Tech-Stacks"
<<<<<<< HEAD
              techD="Html | Javascript | CSS  "
=======
              techD="HTML | CSS | Javascript   "
>>>>>>> bbf71bb8188c775320b9f9e8550045a4888bb17f
              link="https://e-commerce-nike12.netlify.app/"
              a="https://github.com/abbygoyal/E-Commerce.git"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="/images/Monsters_Rolodex.png"
              title="Monsters Rolodex"
              description="This application creates “monster” cards with monster picutres, and user names as well as emails by connecting to two APIs.There is also a search bar which can be used to filter and search for the monsters by name."
              tech="Tech-Stacks"
              techD=" HTML | CSS | Javascript | React"
              link="https://monsters-rolod.netlify.app/"
              a="https://github.com/abbygoyal/Monster-Project.git"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="/images/React_UI.png"
              title="React UI Project"
              description="This application consist of several UI pages built on ReactJs using routes and website is completely responsive"
              tech="Tech-Stacks"
              techD=" HTML | CSS | Javascript | React"
              link="https://react-ui-project.netlify.app/"
              a="https://github.com/abbygoyal/React-UI.git"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="/images/RealEstate_UI.png"
              title="Property Listing MarketPlace"
              description="Search and sort the best information for property prices, features, and pictures. We researched and reviewed the best real estate websites to help you buy best Real Estate"
              tech="Tech-Stacks"
              techD=" HTML | CSS | Javascript | React"
              link="https://properties-marketplace.netlify.app/"
              a="https://github.com/abbygoyal/RealEstate-UI.git"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="/images/Expense-tracker.png"
              title="Expense Tracker"
              description="Add and Sort the Expenses According to Year wise and also there filter to Sort the Expense"
              tech="Tech-Stacks"
              techD=" HTML | CSS | Javascript | React"
              link="https://tracker-expenses-react.netlify.app/"
              a="https://github.com/abbygoyal/react-expenses.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
