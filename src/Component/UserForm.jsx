import React from "react";
import User from "./User";

const Users = (props) => {
  return (
    <div>
      {props.userDate.map((user, index) => {
        return <User userinfo={user} key={index} />;
      })}
    </div>
  );
};

export default Users;
