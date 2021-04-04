import React from "react";
import {ListGroup} from 'react-bootstrap'

export default function ContactPage ()
{
 return (
     <>
     <hr />
     <h1>Contact</h1>
<ListGroup>
  <ListGroup.Item>Find Me on <a href="https://www.facebook.com/tracey.french.102/"target="_blank"rel="noreferrer">Facebook</a> Tracey French, (I still use my
        Maiden Name)</ListGroup.Item>
  <ListGroup.Item>Visit Me on
        <a
          href="https://www.linkedin.com/in/tracey-saada-193709a6/"
          target="_blank"rel="noreferrer"
          >LinkedIn</a
        ></ListGroup.Item>
  <ListGroup.Item>Yes I have a Twitter Account but I dont Like using this so would not
        know if you wanted to follow, please dont think I am ignoring you</ListGroup.Item>
  <ListGroup.Item>Email
        <a href="mailto:tracey.saada@outlook.com">tracey.saada@outlook.com</a></ListGroup.Item>
  <ListGroup.Item>Mobile No 07786374892</ListGroup.Item>
</ListGroup>
</>
     //
 )
}