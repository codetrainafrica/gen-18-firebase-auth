import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  registerUserWithEmail,
  loginWithGoogle,
  loginWIthEmail,
} from "../actions/authActions";

function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    let email = e.target.elements.email.value;
    let password = e.target.elements.password.value;

    dispatch(registerUserWithEmail(email, password));
  };

  const authWithGoogle = (e) => {
    e.preventDefault();
    dispatch(loginWithGoogle());
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input name="email" type="email" />
        <label>Password</label>
        <input name="password" type="password" />
        <hr />
        <button type="submit" className="btn-primary">
          Submit
        </button>

        <Link to="/login">Already have an account? Sign in</Link>

        <button onClick={authWithGoogle}>Sign in with Google</button>
      </form>
    </div>
  );
}

export default RegisterForm;
