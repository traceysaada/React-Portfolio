import React from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { CardDeck } from "react-bootstrap";
import photo1 from "../Styles/image/homepage-picture.jpg";
import photo2 from "../Styles/image/My-Daughters.jpeg"


export default function About() {
  return (
    <>
      <hr />
      <a
        href="https://drive.google.com/file/d/12vzjvLG0JS56tjWpSWp03YnXUGLwN8Y9/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <Button style={{textDecorationColor: "black"}} variant="outline-info">View my CV</Button>
      </a>
      <hr />
      <CardDeck>
        <Card style={{ width: "30rem" }}>
          <Card.Img style={{height: "300px", width: "300px", margin: "auto"}}
            variant="top"
            src={photo1}
          />
          <Card.Body>
            <Card.Title>My Career</Card.Title>
            <Card.Text>
              I currently work at Amdec Industrial Products as their Operations
              Manager, we supply all Materials Handling Equipment. I have worked
              at Amdec for 20 years and I have been a big part of the companies
              Development and Growth. Working in all areas of the company and
              have been the key player in the setting up of each department
              within the company. So this brings me to Coding. We have developed
              our Service and Production side, We now have our show rooms ready
              and open to the public. But our Internet and Web site are not
              developed. To move us properly onto the Web for further sales and
              this is where alot of future sales lies, on the Internet. So I was
              given the task to now develope this side of the Company.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "30rem" }}>
          <Card.Img style={{height: "300px", width: "300px", margin: "auto"}}
            variant="top"
            src={photo2}
          />
          <Card.Body>
            <Card.Title>My Life</Card.Title>
            <Card.Text>
              I am the proud Mother of 3 Daughters and I have 4 Grandchildren,
              HaHa and 3 Granddogs they are definitely a big part of our family.
              I am a Gym member and convinced 30 of my fellow friends there to
              do an activity with me, not sure they forgave me, but it was to do
              Tough Guy Nettle Warrior a 17k army assault course it was painful.
              My favourite pass time is to take advantage of the fact I live in
              the countryside and take long walks with my family or friends, My
              Grandchildren have Dogs so we love to walk as a family with the
              dogs, in non Covid times calling at a Garden Centre or Pub to have
              Sunday lunch together.
              
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </>
  );
}
