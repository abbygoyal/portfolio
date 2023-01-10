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
              techD="HTML | CSS | Javascript "
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
              description="Expense Tracker to track all the Monthly Expenses and we can add and sort the expenses according to the years also monthly Height bar is there to show the expenses"
              tech="Tech-Stacks"
              techD=" HTML | CSS | Javascript | React"
              link="https://tracker-expenses-react.netlify.app/"
              a="https://github.com/abbygoyal/react-expenses.git"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="/images/Username_Age.png"
              title="Username & Age"
              description="Add the Username and Age with boundation, that is Username shouldn't be empty aand Age must be positive number"
              tech="Tech-Stacks"
              techD=" HTML | CSS | Javascript | React"
              link="https://username-age-with-boundation.netlify.app/"
              a="https://github.com/abbygoyal/Username-and-Age-with-boundation.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
