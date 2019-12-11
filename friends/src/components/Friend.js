import React from "react";

const Friend = ({ name, age, email }) => {
  return (
    <div className="friendCard">
      <h4>Name: {name} </h4>
      <p>Age: {age} </p>
      <p>Email: {email} </p>
    </div>
  );
};

export default Friend;
