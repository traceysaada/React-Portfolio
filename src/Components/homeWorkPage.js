import React from "react";
import { Card } from "react-bootstrap";
import { CardDeck } from "react-bootstrap";

export default function HomeWorkPage() {
  return (
    <>
      <hr />

      <h1>Link to some of my Homeworks</h1>
      <CardDeck>
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

      <Card style={{ width: "30rem" }}>
        <Card.Body>
          <Card.Title>Homework Day Schedule</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            A Fun Todo List
          </Card.Subtitle>
          <Card.Text>
            First attempt at doing local storage, create a list. Day diary time
            schedule and appointments organiser for a Day at Work.
          </Card.Text>
          <Card.Link href="#">
            <a
              href="https://github.com/traceysaada/Work-Day-Scheduler"
              target="_blank"
              rel="noreferrer"
            >
              Click link GitHub Homework
            </a>
          </Card.Link>
          <Card.Link href="#">
            <a
              href="https://traceysaada.github.io/Work-Day-Scheduler/"
              target="_blank"
              rel="noreferrer"
            >
              Click link Work Day Scheduler
            </a>
          </Card.Link>
        </Card.Body>
      </Card>

      <Card style={{ width: "30rem" }}>
        <Card.Body>
          <Card.Title>Eat Da Burger</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            A Fun activity to create a Burger and devour a Burger
          </Card.Subtitle>
          <Card.Text>
            This homework was my first attempt at having several folders and
            files all needing to be linked together, to get the program to
            deploy using Mysql, herokuapp, handlebars for the first time server
            connection set-up, first database. Complicated but fun todo
          </Card.Text>
          <Card.Link href="#">
            <a
              href="https://traceysaada.github.io/week-13-eat-da-burger/"
              target="_blank"
              rel="noreferrer"
            >
              click link GitHub Homework
            </a>
          </Card.Link>
          <Card.Link href="#">
            <a
              href="https://burger-62.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Click link Eat Da Burger
            </a>
          </Card.Link>
        </Card.Body>
      </Card>
      </CardDeck>
     
      <hr />
      <CardDeck>
      <Card style={{ width: "30rem" }}>
        <Card.Body>
          <Card.Title>workout Tracker</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Keep track of your weekly workout
          </Card.Subtitle>
          <Card.Text>
            A user, can create and track daily workouts. log multiple exercises
            for a a given day. Can also track the name, type, weight, sets,
            reps, and duration of exercise. If the exercise is a cardio
            exercise, they will be able to track their distance traveled.For
            this application I used the mongoose DB, also mongodb atlas and
            heroku for deploy. this was quite a fun but challenging application
            to do as I had not used any of these before and had some problems
            connecting with the mongodb atlas turned out to be something as
            simple as my password.
          </Card.Text>
          <Card.Link href="#">
            <a
              href="https://fitness-tracker-tracey.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              click link to Workout Tracker
            </a>
          </Card.Link>
        </Card.Body>
      </Card>

      <Card style={{ width: "30rem" }}>
        <Card.Body>
          <Card.Title>Employee Directory</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Search list of Employees
          </Card.Subtitle>
          <Card.Text>
            To enable an employer to have a data base he can search to get
            current employees details. An employee or manager would benefit
            greatly from being able to view non-sensitive data about other
            employees. This will give quick and accurate details for all
            employee's information. You can search for Employees via search bar. 
            Highlight Name for list to display in alphabetical ascending order. 
            Hightlight name again and it will allow you to search in Descending alphabetical order. 
          </Card.Text>
          <Card.Link href="#">
            <a
              href="https://traceysaada.github.io/Employee-Directory/"
              target="_blank"
              rel="noreferrer"
            >
              click link to Employee Directory
            </a>
          </Card.Link>
        </Card.Body>
      </Card>
      </CardDeck>
    </>
    //
  );
}
