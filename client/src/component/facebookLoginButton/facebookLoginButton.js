import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

import "./facebookLoginButton.css";

import { login } from "../../actions/loadInfo";
import { Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import ENV from "./../../config";

class FacebookLoginButton extends React.Component {
  render() {
    const responseFacebook = (response) => {
      login(response, this.props.parent);
    };

    return (
      <FacebookLogin
        appId={ENV.facebokAppID}
        autoLoad={true}
        isMobile={false}
        fields="name,picture"
        callback={responseFacebook}
        render={(renderProps) => (
          <Button
            className="fb-login-button"
            startIcon={<FacebookIcon />}
            onClick={renderProps.onClick}
          >
            Log in with Facebook
          </Button>
        )}
      />
    );
  }
}

export default FacebookLoginButton;
