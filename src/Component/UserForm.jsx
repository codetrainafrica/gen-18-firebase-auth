import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";

const Users = ({ users }) => {
  return (
    <div>
      {users.map((user, idex) => {
        return (
          <div key={idex}>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                  Super card
                </Card.Subtitle>
                <Card.Title>Name: {user.name}</Card.Title>
                <Card.Text>
                  <p>Contact: {user.contact}</p>
                  <p>Location: {user.location}</p>
                </Card.Text>
                <Button variant="outline-primary" size="sm">
                  Eidth
                </Button>{" "}
                <Button variant="outline-dark" size="sm">
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps)(Users);
