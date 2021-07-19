import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import EidthUser from "./EidthUser";

const User = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteuser(props.userinfo.id);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header>
          <Modal.Title>EidthUser</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EidthUser
            userinfo={props.userinfo}
            eidthuser={props.eidthuser}
            closeModal={handleClose}
          />
        </Modal.Body>
      </Modal>

      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">
              Super card
            </Card.Subtitle>
            <Card.Title>Name: {props.userinfo.name}</Card.Title>
            <Card.Text>
              <p>Contact: {props.userinfo.contact}</p>
              <p>Location: {props.userinfo.location}</p>
            </Card.Text>
            <Button variant="outline-primary" size="sm" onClick={handleShow}>
              Eidth
            </Button>{" "}
            <Button variant="outline-dark" size="sm" onClick={handleDelete}>
              Delete
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default User;
