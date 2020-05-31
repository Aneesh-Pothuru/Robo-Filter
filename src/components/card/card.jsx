import React from "react";
import "./card.css";

export const Card = (props) => (
  <div className="card-container">
    <img
      alt="monstor"
      src={`https://robohash.org/${
        props.monster.id * props.monster.id
      }?set2=set3`}
    />
    <h2>{props.monster.name}</h2>
    <p>{props.monster.email}</p>
  </div>
);
