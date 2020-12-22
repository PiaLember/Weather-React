import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function Buttons() {
  return (
    <span className="buttons">
      <button type="button" className="btn btn-outline-dark" id="celsius">
        °C
      </button>
      <button type="button" className="btn btn-outline-dark" id="fahrenheit">
        °F
      </button>
      <button
        type="button"
        className="btn btn-outline-dark"
        id="current-location"
      >
        <FontAwesomeIcon icon={faMapMarkerAlt} />
      </button>
    </span>
  );
}
