import React from "react";

export default function City() {
  return (
    <form className="city" id="search">
      <input
        type="search"
        placeholder="City"
        id="city-input"
        autoComplete="off"
        autoFocus="on"
      />
      <input type="submit" value="Search" id="search-button" />
    </form>
  );
}
