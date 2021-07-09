import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col } from 'react-bootstrap';
import UserForm from "./Component/UserForm";
import AddUser from "./Component/AddUser";
import './App.css';

import React, { Component } from 'react';

class App extends Component {
    constructor(props){
      super(props)
      this.state= {
        users: [
          {
            name:" Prince Antwi",
            contact: "0572211378",
            location: "lapaz"
          }
        ]
      }
    }
    handleAddUser = (user) => {
      this.setState({ 
        users: [...this.state.users, user ]});
    };
   
  render() {
    return (
      <>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <AddUser adduser={this.handleAddUser} />
          </Col>
          <Col xs={6} md={8}>
            <UserForm  userDate={this.state.users}/>
          </Col>
        </Row>
      </Container>
      </>
    );
  }
}

export default App;

