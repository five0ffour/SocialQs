import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./style.css"

function User(props) {

    return (
      <div id="profile-pic">
        <img className="circle"
          src="http://i.pravatar.cc/300" 
          alt="" />

        User:  {props.user.firstName} {props.user.lastName}
      </div>
    );
}

export default User;