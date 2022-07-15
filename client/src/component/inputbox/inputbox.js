import React from "react";
import "./inputbox.css";

class InputBox extends React.Component {
  render() {
    const { type } = this.props;

    return <input className="inputbox" id={type}></input>;
  }
}

export default InputBox;
