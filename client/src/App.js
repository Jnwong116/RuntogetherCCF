import "./App.css";

import Button from "./component/button/button";
import HeaderDescription from "./component/headerDescription/headerDescription";
import ProfilePicture from "./component/profilePicture/profilePicture";
import DisplayName from "./component/displayName/displayName";
import PageHeader from "./component/pageHeader/pageHeader";
import { NewTab, newFunction } from "./actions/logInfo";
import InputBox from "./component/input/input";
import Link from "./component/link/link";
import React from "react";
import CandidateStatus from "./component/candidateStatus/candidateStatus";

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

        <HeaderDescription />
        <PageHeader text="Welcome to the Runtogether Website!" />
        <ProfilePicture img_link="https://cdn.worldvectorlogo.com/logos/react-1.svg" />
        <Link text="Test" newPageURL="https://www.facebook.com/groups/utccf/" />
        <Link
          text="Testing function call"
          handleClick={() => console.log("Hello!")}
        />
        <DisplayName text="The candidates' full names will be displayed here." />
        <p> Nominations </p>
        <InputBox type="nomination" />
        <CandidateStatus status="needsNominations" />
      </div>
    );
  }
}

export default App;
