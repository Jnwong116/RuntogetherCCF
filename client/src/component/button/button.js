import React from "react";

import "./button.css";

class Button extends React.Component {
  render() {
    const { text, onClick } = this.props;

    return (
      <button class="button" onClick={onClick}>
        {text}
      </button>
    );
  }
}

export default Button;
