import React from "react";
export const Person = ({ person }) => {
  <div className="list-item-container">
    <p>{person.name}</p>
    <p>{person.date}</p>
    <p>{person.number}</p>
    <p>{person.description}</p>
  </div>;
};
