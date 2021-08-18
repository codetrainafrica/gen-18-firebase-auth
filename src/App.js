import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col } from 'react-bootstrap';
import UserForm from "./Component/UserForm";
import AddUser from "./Component/AddUser";
import './App.css';

import React, { Component } from 'react';

class App extends Component {

    handleAddUser = (user) => {
      user.id = Math.random().toString;
      this.setState({ 
        users: [...this.state.users, user ]});
    };
    handleDelete =(id) =>{
   let undeleted = this.state.users.filter((user) => user.id !== id)
   this.setState({ 
     users: undeleted
   })
    }
    handleEidth =(id, updateUser) =>{
    this.setState({
      users : this.state.users.map(user=> user.id === id ? updateUser: user)
    })
    }
   
  render() {
    return (
      <>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <AddUser adduser={this.handleAddUser}  />
          </Col>
          <Col xs={6} md={2}>
            <UserForm  />
          </Col>
        </Row>
      </Container>
      </>
    );
  }
}

export default App;

