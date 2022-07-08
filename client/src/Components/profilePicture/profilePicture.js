import React from "react";

import "./profilePicture.css";

class profilePicture extends React.Component {
  render() {
    const { img_link } = this.props;

    return <img src={img_link} />;
  }
}

export default profilePicture;
