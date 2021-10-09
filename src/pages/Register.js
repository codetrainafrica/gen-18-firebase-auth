import React from "react";
import { useDispatch } from "react-redux";
import { registerUserWithEMail, loginWithGoogle } from "../actions/authActions";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function RegisterForm() {
  const dispatch = useDispatch();
  const { replace } = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    let email = e.target.elements.email.value;
    let password = e.target.elements.password.value;

    dispatch(registerUserWithEMail(email, password, replace));
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

        <button onClick={loginWithGoogle}>Sign in with Google</button>
      </form>
    </div>
  );
}

export default RegisterForm;
