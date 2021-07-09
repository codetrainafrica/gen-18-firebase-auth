import React, { Component } from "react";
import "./UserForm.css";
class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      contact: "",
      location: "",
    };
  }
  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.adduser(this.state);
    this.setState({
      name: "",
      contact: "",
      location: "",
    });
  };

  render() {
    return (
      <form className="class-form" onSubmit={this.handleSubmit}>
        <h4>Crud UsersForm</h4>
        FirstName: <br />
        <input
          className="form_input"
          name="name"
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder={this.props.name}
        />
        <br />
        Contact: <br />
        <input
          className="form_input"
          type="number"
          name="contact"
          value={this.state.contact}
          onChange={this.handleChange}
        />
        <br />
        Location: <br />
        <input
          className="form_input"
          name="location"
          type="text"
          value={this.state.location}
          onChange={this.handleChange}
          placeholder={this.props.location}
        />
        <br />
        <input className="form_button" type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddUser;
