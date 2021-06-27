import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

export default function Event(props) {
  return (
    <div>
      <Container fluid>
        <Card>
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
              <Card.Text>
                <p>Location: {props.location}</p>
                <p>Date: {props.date}</p>
                <Link to={`/event/${props.id}`}>View event</Link>
              </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}