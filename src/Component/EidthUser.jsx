import React, { Component } from "react";
import "./UserForm.css";

class EidthUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.userinfo.name,
      contact: props.userinfo.contact,
      location: props.userinfo.location,
      id: props.userinfo.id,
    };
  }
  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.eidthuser(this.state.id, this.state);
    this.setState({
      name: "",
      contact: "",
      location: "",
      id: "",
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

export default EidthUser;
