import React from "react";
import "./UserOutput.css";

const userOutput = props => {
  return (
    <div className="UserOutput">
      <p>Username:{props.userName}</p>
      <p>THIS IS ANOTHER PARAGRAPH</p>
    </div>
  );
};

export default userOutput;
