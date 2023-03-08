import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

import "./facebookLoginButton.css";

import { login } from "../../actions/loadInfo";
import { Button } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';

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
        render={() => (
          <Button className="fb-login-button" startIcon={<FacebookIcon />}>
            Log in with Facebook
          </Button>
        )}
      />
    );
  }
}

export default FacebookLoginButton;
