import React from "react";
import { Link } from "react-router-dom";

export default function Event(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p><Link to={`/events/`}>View event</Link></p>
    </div>
  )
}