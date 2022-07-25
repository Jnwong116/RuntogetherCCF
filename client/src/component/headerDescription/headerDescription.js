import React from "react";

import "./headerDescription.css";

class HeaderDescription extends React.Component {
  render() {
    const { text } = this.props;
    if (text === undefined) {
      return (
        <p className="headerDescription">
          For UTCCF elections this year, we're encouraging everyone to join in
          on the running process! It's an exciting time to support and find out
          what God has planned for brothers and sisters in this community. This
          means it's also time to get started on thinking about ministry and IG
          leading too :). So update the community with your discernment process,
          speak to those who are considering, and pray for each other!
        </p>
      );
    } else {
      return <p className="headerDescription">{text}</p>;
    }
  }
}

export default HeaderDescription;
