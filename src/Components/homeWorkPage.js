import React from "react";
import { Card } from "react-bootstrap";


export default function HomeWorkPage ()
{
 return (
     <>
    <hr />

     <h1>Home work Links</h1>
     <Card style={{ width: '30rem' }}>
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