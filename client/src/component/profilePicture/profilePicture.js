import React from "react";

import "./profilePicture.css";

class ProfilePicture extends React.Component {
  render() {
    const { img_link } = this.props;

    return <img class="profile-pic" src={img_link} />;
  }
}

export default ProfilePicture;
