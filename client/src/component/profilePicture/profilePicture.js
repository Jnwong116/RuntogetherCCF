import React from "react";

import "./profilePicture.css";

class ProfilePicture extends React.Component {
  render() {
    const { img_link } = this.props;

    return <img className="profile-pic" src={img_link} alt="" />;
  }
}

export default ProfilePicture;
