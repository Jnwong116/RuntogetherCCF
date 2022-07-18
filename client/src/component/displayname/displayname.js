import React from "react";

import "./displayName.css";

class DisplayName extends React.Component {
  render() {
    const { text } = this.props;
    return (
      <body>
        <h3>{text}</h3>
      </body>
    );
  }
}

export default DisplayName;
