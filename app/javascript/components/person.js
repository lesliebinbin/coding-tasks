import React from "react";
export const Person = ({ person }) => (
  <div className="list-item-container">
    <span>{person.name}</span>
    <span>{person.date}</span>
    <span>{person.number}</span>
    <span>{person.description}</span>
  </div>
);
