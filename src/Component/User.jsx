import React, { useState } from "react";

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
    </>
  );
};

export default User;
