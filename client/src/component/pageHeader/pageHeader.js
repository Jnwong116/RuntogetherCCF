import React, { Component } from "react";
import "./pageHeader.css";

class pageHeader extends Component {
  render() {
    const { text } = this.props;
    return (
      <header>
        <h1>{text}</h1>
      </header>
    );
  }
}

export default pageHeader;
