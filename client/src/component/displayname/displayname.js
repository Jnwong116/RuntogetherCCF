import React from "react";

import "./displayname.css";

class DisplayName extends React.Component {
  render() {
    const { text } = this.props;
    return (
      <body>
        <h5>{text}</h5>
      </body>
    );
  }
}

export default DisplayName;
