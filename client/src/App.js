import logo from "./logo.svg";
import "./App.css";

import Button from "./component/button/button";
import ProfilePicture from "./component/profilePicture/profilePicture";
import DisplayName from "./component/displayname/displayname";
import { NewTab, newFunction } from "./actions/logInfo";
import InputBox from "./component/inputbox/inputbox";
import React from "react";

class App extends React.Component {
  state = {
    wizards: "hon hon hon",
    text: "This is a not a div",
  };

  render() {
    return (
      <div className="App">
        {/* <Button text="Hello" onClick={() => NewTab()} />
        <Button text="World" onClick={() => console.log("Hello!")} />
        <p>{this.state.wizards}</p>
        <input type="text" id="input_box"></input>
        <Button
          text={this.state.text}
          onClick={() => {
            const inputBox = document.getElementById("input_box");
            const newValue = inputBox.value;
            inputBox.value = "";
            newFunction(newValue, this);
          }}
        /> */}
        <ProfilePicture img_link="https://cdn.worldvectorlogo.com/logos/react-1.svg" />
        <DisplayName text="The candidates' full names will be displayed here." />
        <p> Nominations </p>
        <InputBox type="text" />
        <p> Visions </p>
        <InputBox type="file" text="Visions" />
      </div>
    );
  }
}

export default App;
