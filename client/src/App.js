import logo from "./logo.svg";
import "./App.css";

import Button from "./component/button/button";
import ProfilePicture from "./component/profilePicture/profilePicture";
import { NewTab, newFunction } from "./actions/logInfo";
import Link from "./component/link/link";
import React from "react";
import ListHeader from "./component/listHeader/listHeader";
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
        <Link
          text="Testing new link"
          newPageURL="https://www.facebook.com/groups/utccf/"
        />
        <Link
          text="Testing function call"
          handleClick={() => console.log("Hello")}
        />
        <ListHeader text="Considering"></ListHeader>
        <ListHeader text="Decided"></ListHeader>
      </div>
    );
  }
}

export default App;
