import React from "react";

import "./link.css";

class Link extends React.Component {
  render() {
    const { text, newPageURL, handleClick } = this.props;

    return (
      <a href={newPageURL} target="_blank" rel="noreferrer">
        <button className="linkStyle" onClick={handleClick}>
          {text}
        </button>
      </a>
    );
  }
}

export default Link;
