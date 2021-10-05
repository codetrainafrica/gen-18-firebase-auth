import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import {
  registerUserWithEmail,
  loginWithGoogle,
  loginWIthEmail,
} from "../actions/authActions";

function LoginForm(props) {
  const dispatch = useDispatch();
  const { replace } = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    let email = e.target.elements.email.value;
    let password = e.target.elements.password.value;

    dispatch(loginWIthEmail(email, password, replace));
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

        <Link to="/register">Don't have an account? Sign up</Link>

        <button onClick={authWithGoogle}>Sign in with Google</button>
      </form>
    </div>
  );
}

const mapSTateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapSTateToProps)(LoginForm);
