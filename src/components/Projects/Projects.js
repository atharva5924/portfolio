import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatapp from "../../Assets/Projects/chatapp.png";
import FitnessPoint from "../../Assets/Projects/FitnessPoint.png";
import BlogApp from "../../Assets/Projects/BlogApp.png";
import todolist from "../../Assets/Projects/todolist.png";
import studyabroad from "../../Assets/Projects/studyabroad.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BlogApp}
              isBlog={false}
              title="BlogApp"
              description="Built a blog application using React.js, Appwrite, and Redux, featuring authentication, real-time database, and rich text editing with TinyMCE. Designed a responsive UI with Tailwind CSS and enabled smooth navigation across 5+ pages using React Router DOM for an enhanced user experience."
              ghLink="https://github.com/atharva5924/BlogApp"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={studyabroad}
              isBlog={false}
              title="Study-MBBS-Abroad"
              description="Developed a Study MBBS Abroad landing page to help students explore opportunities for studying MBBS overseas. The website is designed to be responsive and user-friendly, providing key information on eligibility, benefits, and popular destinations. It likely includes clear content, engaging visuals, and a contact form for inquiries, ensuring a smooth user experience."
              ghLink="https://github.com/atharva5924/study-MBBS-abroad"
              demoLink="https://study-mbbs-abroad-rust.vercel.app/ "
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatapp}
              isBlog={false}
              title="ChatApp"
              description="You developed ChatApp, a real-time messaging application built with React and Firebase for seamless communication. The app features user authentication, real-time chat functionality, and a responsive UI for an intuitive experience. It ensures smooth data synchronization and efficient message handling using Firebase's Firestore. The design is optimized for performance, accessibility, and cross-device compatibility."
              ghLink="https://github.com/atharva5924/chatapp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FitnessPoint}
              isBlog={false}
              title="Fitness-Point"
              description="Developed FitnessPoint, a workout and fitness app built with React to help users track their fitness journey. The app includes features like personalized workout plans, exercise tracking, and progress monitoring. It is designed to be responsive and user-friendly, ensuring accessibility across devices. State management and potential backend integration enable seamless data handling."
              ghLink="https://github.com/atharva5924/FitnessPoint"

            />
          </Col>

          

       

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todolist}
              isBlog={false}
              title="TodoList"
              description="Developed a To-Do List application using React to help users manage tasks efficiently. The app provides a clean and intuitive interface for adding, editing, and deleting tasks. It likely utilizes state management for dynamic updates and local storage or a backend to persist tasks. The UI is designed to be responsive and user-friendly, ensuring a seamless experience across different devices."
              ghLink="https://github.com/atharva5924/todolist"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
