import React from "react";

export default function EventDetails(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.time}</p>
      <p>{props.location}</p>
      <p>{props.description}</p>
    </div>
  )
}