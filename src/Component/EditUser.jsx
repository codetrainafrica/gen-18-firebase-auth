import React, { Component } from "react";
import "./UserForm.css";
import { editUser } from "../AddAction/AddAction";
import { connect } from "react-redux";

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.users.name,
      contact: props.users.contact,
      location: props.users.location,
      id: props.users.id,
    };
  }
  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.editUser(this.state);
    this.setState({
      name: "",
      contact: "",
      location: "",
    });
    this.props.closeModal();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        FirstName: <br />
        <input
          name="name"
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder={this.props.name}
        />
        <br />
        Contact: <br />
        <input
          type="number"
          name="contact"
          value={this.state.contact}
          onChange={this.handleChange}
        />
        <br />
        Location: <br />
        <input
          name="location"
          type="text"
          value={this.state.location}
          onChange={this.handleChange}
          placeholder={this.props.location}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
const mapDispatchToProps = {
  editUser: editUser,
};

export default connect(null, mapDispatchToProps)(EditUser);
