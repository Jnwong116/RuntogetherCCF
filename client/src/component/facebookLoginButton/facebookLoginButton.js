import React from "react";
import FacebookLogin from "react-facebook-login";

import { login } from "../../actions/loadInfo";

class FacebookLoginButton extends React.Component {
  render() {
    const responseFacebook = (response) => {
      login(response, this.props.parent);
    };

    return (
      <FacebookLogin
        appId="1355204125212638"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
      />
    );
  }
}

export default FacebookLoginButton;
