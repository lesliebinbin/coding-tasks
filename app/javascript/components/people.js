import React from "react";
import { Person } from "./person";

export const People = ({ people }) => (
  <>
    {people.map((person) => (
      <Person key={person.name} person={person} />
    ))}
  </>
);
