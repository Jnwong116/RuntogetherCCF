import React from "react";

import "./candidateStatus.css";

class CandidateStatus extends React.Component {
  render() {
    const { status } = this.props;
    return (
      <div className="candidateStatus">
        {status === "hasNominations"
          ? "Already has nominations"
          : "Needs nominations"}
      </div>
    );
  }
}

export default CandidateStatus;
