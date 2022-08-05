import React from "react";
import "./listHeader.css";

class ListHeader extends React.Component {
  render() {
    const { text } = this.props;

    return <h2 class="listHeader">{text}</h2>;
  }
}

export default ListHeader;
