import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  render() {
    const { text } = this.props;
    return (
      <header>
        <h1>{text}</h1>
      </header>
    );
  }
}

export default Header;
