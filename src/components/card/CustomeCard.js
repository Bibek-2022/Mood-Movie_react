import React from "react";
import { Card, Button } from "react-bootstrap";

export const CustomeCard = () => {
  return (
    <Card style={{ width: "18rem" }} className="mt-5">
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Title>Rating: 3.3</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div class="d-flex justify-content-around">
          <Button variant="info">Happy</Button>
          <Button variant="warning">Lazy</Button>
        </div>
      </Card.Body>
    </Card>
  );
};
