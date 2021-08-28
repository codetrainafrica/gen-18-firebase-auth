import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col } from 'react-bootstrap';
import Userlist from "./Component/Userlist";
import AddUser from "./Component/AddUser";
import './App.css';

import React, { Component } from 'react';

class App extends Component {

   
  render() {
    return (
      <>
      <Container>
        <Row>
          <Col xs={6} md={4} >
            <AddUser   />
          </Col>
          <Col xs={6} md={2} className="box">
            <Userlist  />
          </Col>
        </Row>
      </Container>
      </>
    );
  }
}

export default App;

