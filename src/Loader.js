import React, { Component } from "react";

import SimpleLoader from "react-simple-dots-loader";

export default class Loader extends Component {
  render() {
    return (
      <div>
        <SimpleLoader color="red" />
      </div>
    );
  }
}
