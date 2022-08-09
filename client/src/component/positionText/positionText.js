import React from "react";
import "./positionText.css";

class PositionText extends React.Component {
  render() {
    const { text } = this.props;

    return <p class="positionText">{text}</p>;
  }
}

export default PositionText;
