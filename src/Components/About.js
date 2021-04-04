import React from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { CardDeck } from "react-bootstrap";

export default function About() {
  return (
    <>
      <hr />
      <a
        href="https://drive.google.com/file/d/12vzjvLG0JS56tjWpSWp03YnXUGLwN8Y9/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <Button variant="outline-info">View my CV</Button>
      </a>
      <CardDeck>
      <Card style={{ width: "40rem" }}>
        <Card.Img variant="top" src="/src/styles/images/homepage-picture.jpg" />
        <Card.Body>
          <Card.Title>My Career</Card.Title>
          <Card.Text>
            I currently work at Amdec Industrial Products as their Operations
            Manager, we supply all Materials Handling Equipment. I have worked
            at Amdec for 20 years and I have been a big part of the companies
            Development and Growth. Working in all areas of the company and have
            been the key player in the setting up of each department within the
            company. So this brings me to Coding. We have developed our Service
            and Production side, We now have our show rooms ready and open to
            the public. But our Internet and Web site are not developed. To move
            us properly onto the Web for further sales and this is where alot of
            future sales lies, on the Internet. So I was given the task to now
            develope this side of the Company.
          </Card.Text>
        </Card.Body>
      </Card>
     
      <Card style={{ width: "40rem" }}>
        <Card.Img variant="top" src="/src/styles/images/homepage-picture.jpg" />
        <Card.Body>
          <Card.Title>My Career</Card.Title>
          <Card.Text>
            I currently work at Amdec Industrial Products as their Operations
            Manager, we supply all Materials Handling Equipment. I have worked
            at Amdec for 20 years and I have been a big part of the companies
            Development and Growth. Working in all areas of the company and have
            been the key player in the setting up of each department within the
            company. So this brings me to Coding. We have developed our Service
            and Production side, We now have our show rooms ready and open to
            the public. But our Internet and Web site are not developed. To move
            us properly onto the Web for further sales and this is where alot of
            future sales lies, on the Internet. So I was given the task to now
            develope this side of the Company.
          </Card.Text>
        </Card.Body>
      </Card>


      </CardDeck>
    </>
  );
}
