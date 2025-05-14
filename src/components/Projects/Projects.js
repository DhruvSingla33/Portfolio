import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import Task from "../../Assets/Projects/Task.png";
import DevMinds from "../../Assets/Projects/DevMinds.png";
import BooksHive from "../../Assets/Projects/BooksHive.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={DevMinds}
              isBlog={false}
              title="DevMinds"
              description="DevMinds is an innovative platform designed to help students and mentors grow through coding, visualization, and collaboration. It features a powerful algorithm visualizer that explains popular algorithms step-by-step with real-time animations. Users can solve problems using a Python-based online judge with instant feedback and performance tracking. The platform also includes a live HTML/CSS/JS compiler for quick frontend prototyping directly in the browser. A built-in developer community fosters learning through discussions, posts, and peer interaction."
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BooksHive}
              isBlog={false}
              title="BooksHive"
              description="BooksHive is an all-in-one e-book platform built for collaborative and personalized learning.
It offers a hybrid recommendation system combining content-based and user-based filtering.
Real-time chat enables smooth communication between teachers and students.
Role-based access ensures tailored experiences for admins, teachers, and students.
Additional features like email notifications, ratings, and teacher profiles enrich the platform."
              ghLink="https://github.com/DhruvSingla33/Books_hive/tree/main"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Task}
              isBlog={false}
              title="Task Manager"
              description="The Task Management App is a simple yet powerful application designed to help users manage their tasks efficiently. Users can add tasks, assign due dates, set priorities, and mark tasks as completed. The tasks are displayed in a visually organized card format. This app is perfect for users who want to keep track of their tasks on a daily basis."
              ghLink="https://github.com/DhruvSingla33/taskManagerNew"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
