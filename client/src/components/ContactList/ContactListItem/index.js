import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import moment from "moment";

//table details of one contact
function ContactListItem(props) {
  return (
    <tr>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.email}</td>
      <td>{props.birthDate
                ?   
                moment(props.birthDate)
                  .utc()
                  .format("MM-DD-YYYY")
                : ""}</td>
      <td>{props.relationship}</td>
      <td className="center-align"> {props.go}</td>
      <td className="center-align">{props.delete}</td>
    </tr>
  );
}

export default ContactListItem;
