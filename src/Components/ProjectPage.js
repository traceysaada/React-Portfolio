import React from "react";
import { Card } from "react-bootstrap";
import { CardDeck } from "react-bootstrap";

export default function ProjectPage() {
  return (
    <>
      <hr />

      <h1>Project's</h1>
      <CardDeck>
      <Card style={{ width: "30rem" }}>
        <Card.Body>
          <Card.Title>My First Team Project</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Friends Night In
          </Card.Subtitle>
          <Card.Text>
            concept of the project: When you visit the website, you are
            presented with a split screen, you can then search for recipes or a
            movie. You can search for a recipe using an ingredient, you are then
            presented with a random meal, you can then visit the webpage and see
            the full recipe. When You search for a movie using its name,You are
            presented with the title of the movie, the poster, year of release
            and a list of the main actors. If you search for a new recipe or
            movie you are still able to see any previous searches in the form of
            buttons. If you click on the previous search buttons, they will
            direct you to the results of that search.
          </Card.Text>
          <Card.Link href="#">
            <a
              href="https://github.com/omaymaahmad/friends-night-in"
              target="_blank"
              rel="noreferrer"
            >
             Click link to GitHub Project
            </a>
          </Card.Link>
          <Card.Link href="#">
            <a
              href="https://omaymaahmad.github.io/friends-night-in/"
              target="_blank"
              rel="noreferrer"
            >
             Click link to Friends Night In
            </a>
          </Card.Link>
        </Card.Body>
      </Card>
      <Card style={{ width: "30rem" }}>
        <Card.Body>
          <Card.Title>My Second Team Project</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">The Pantry</Card.Subtitle>
          <Card.Text>
            The pantry is a web based application that will allow the user to
            keep a stock inventory of items for the kitchen, This application
            can be used for a small home based pantry or be modified to suit a
            restaurant, shop or small business.
            Future Development of this project, I would like to further
              develop the responsiveness of the bar graph. Add correct pricing,
             quantity of the product for accurate display Once
              quantity and pricing is being utilized we would like to have a
              valuation of stock and wastage costings program Modify some of the
              coding to enable businesses to use for their stores Add further
              locations and categories with further working dynamics for adapting
              to other users requirements Also adding more reports.
          </Card.Text>
          <Card.Link href="#">
          <a
                  href="https://github.com/traceysaada/Project-2-The-Pantry"
                  target="_blank"rel="noreferrer"
                  >Click link to GitHub Project</a
                >
          </Card.Link>
          <Card.Link href="#">
          <a href="https://pantrycheck.herokuapp.com/" target="_blank"rel="noreferrer"
                  >Click link to The Pantry</a
                >
          </Card.Link>
        </Card.Body>
      </Card>
      </CardDeck>
    </>
  );
}
