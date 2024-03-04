import React from "react";

import WelcomeCard from "../component/welcomeCard/welcomeCard";
import LinkSection from "../component/linkSection/linkSection";
import ElectionSection from "../component/electionSection/electionSection";
import { getAllUsers } from "../actions/loadInfo";


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          candidates: [],
          user: {},
        };
      }
    
    componentDidMount() {
        getAllUsers(this);
    }
  render() {
    return (
      <>
        <WelcomeCard parent={this} user={this.state.user} />
        <ElectionSection candidates={this.state.candidates} />
        <LinkSection />
      </>
    );
  }
}

export default Home;
