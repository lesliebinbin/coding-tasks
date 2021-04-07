import React, { useEffect, useState } from "react";
import { Person } from "./person";

export const People = () => {
  const [currentPeople, setPeople] = useState([]);
  useEffect(() => {
    const fetchPeople = async () => {
      const response = await fetch("/people");
      const data = await response.json();
      setPeople(data);
    };
    fetchPeople();
  }, []);
  return (
    <>
      {currentPeople.map((person, index) => (
        <Person key={index} person={person} />
      ))}
    </>
  );
};
