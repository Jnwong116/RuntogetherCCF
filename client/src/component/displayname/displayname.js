import React from "react";

import "./displayname.css";

class displayName extends React.Component {
  render() {
    const { text } = this.props;
    return (
      <body>
        <h3>{text}</h3>
      </body>
    );
  }
}

export default displayName;
