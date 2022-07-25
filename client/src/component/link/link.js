import React from "react";
import { NewTab } from "../../actions/logInfo";

import "./link.css";

class Link extends React.Component {
  render() {
    const { text, newPageURL, handleClick } = this.props;

    let clickAction = handleClick;

    if (handleClick === undefined) {
      clickAction = () => {
        NewTab(newPageURL);
      };
    }

    return (
      <button className="linkStyle" onClick={clickAction}>
        {text}
      </button>
    );
  }
}

export default Link;
