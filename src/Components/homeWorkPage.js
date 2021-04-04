import React from "react";
import { Card } from "react-bootstrap";

export default function HomeWorkPage() {
  return (
    <>
      <hr />

      <h1>Password Generator</h1>
      <Card style={{ width: "30rem" }}>
        <Card.Body>
          <Card.Title>First Homework</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Password Generator
          </Card.Subtitle>
          <Card.Text>
            Found this quite challenging, but this was one I really wanted to
            get right, this is definatley a task that I will use in the future,
            when I generatate My own websites.
          </Card.Text>
          <Card.Link href="#">
            <a
              href="https://github.com/traceysaada/week-3-Password-Generator"
              target="_blank"
              rel="noreferrer"
            >
              Click link GitHub Homework
            </a>
          </Card.Link>
          <Card.Link href="#">
            <a
              href="https://traceysaada.github.io/week-3-Password-Generator/"
              target="_blank"
              rel="noreferrer"
            >
              Click link Password Generator
            </a>
          </Card.Link>
        </Card.Body>
      </Card>
      <Card style={{ width: '30rem' }}>
  <Card.Body>
    <Card.Title>Homework Day Schedule</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">A Fun Todo List</Card.Subtitle>
    <Card.Text>
    First attempt at doing local storage, create a list. Day diary
              time schedule and appointments organiser for a Day at Work.
    </Card.Text>
    <Card.Link href="#"><a
                  href="https://github.com/traceysaada/Work-Day-Scheduler"
                  target="_blank"rel="noreferrer"
                  >Click link GitHub Homework</a
                ></Card.Link>
    <Card.Link href="#"><a
                  href="https://traceysaada.github.io/Work-Day-Scheduler/"
                  target="_blank"rel="noreferrer"
                  >Click link Work Day Scheduler</a></Card.Link>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
    </>
    //
  );
}
