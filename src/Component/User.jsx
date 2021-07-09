import React from "react";
import { Card } from "react-bootstrap";

const User = (props) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">Super card</Card.Subtitle>
          <Card.Title>Name: {props.userinfo.name}</Card.Title>
          <Card.Text>
            <p>Contact: {props.userinfo.contact}</p>
            <p>Location: {props.userinfo.location}</p>
          </Card.Text>
          <Card.Link href="#">Eidth</Card.Link>
          <Card.Link href="#">Delete</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default User;
