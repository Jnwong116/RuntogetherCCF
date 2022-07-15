import React from "react";

import "./link_component.css";

class Link extends React.Component {
  render() {
    const { text, newPageURL, handleClick } = this.props;

    return (
      <a href={newPageURL} target="_blank" rel="noreferrer">
        <button class="linkStyle" onClick={handleClick}>
          {text}
        </button>
      </a>
    );
  }
}

export default Link;
