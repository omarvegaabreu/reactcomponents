import React from "react";

const userInput = props => {
  const userInputStyle = {
    border: "2px solid red"
  };
  return (
    <input
      type="text"
      style={userInputStyle}
      onChange={props.changed}
      value={props.currentName}
    />
  );
};

export default userInput;
