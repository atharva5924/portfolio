import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Atharva Nile </span>
            from <span className="purple"> Maharashtra, India.</span>
            I am currently pursuing B.Tech in Computer and Science Engineering at IIIT
            Nagpur.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Explore. Learn. Grow."{" "}
          </p>
          <footer className="blockquote-footer">Atharva</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
