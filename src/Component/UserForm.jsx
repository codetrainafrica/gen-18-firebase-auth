import React from "react";
import User from "./User";

const Users = (props) => {
  return (
    <div>
      {props.userDate.map((user) => {
        return (
          <User
            userinfo={user}
            key={user.id}
            deleteuser={props.deleteuser}
            eidthuser={props.eidthuser}
          />
        );
      })}
    </div>
  );
};

export default Users;
