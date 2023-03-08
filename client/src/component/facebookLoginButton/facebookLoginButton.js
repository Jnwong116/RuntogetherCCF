import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

import "./facebookLoginButton.css";

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
        isMobile={false}
        fields="name,picture"
        callback={responseFacebook}
        render={(renderProps) => (
          <button className="fb-login-button" onClick={renderProps.onClick}>
            Log in with Facebook
          </button>
        )}
      />
    );
  }
}

export default FacebookLoginButton;
