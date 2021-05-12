import React, { Component } from "react";

class CertFound extends Component {
  state = { name: "", sender: "", course: "" };
  render() {
    return (
      <div
        className="container "
        style={{
          background: "#E4C0C1",
          fontSize: "20px",
          marginTop: "10px",
        }}
      >
        <div>
          <h4>Certificate with following details found</h4>
        </div>
        <div>
          Course:
          <span style={{ marginLeft: "10px" }}>{this.props.details[0]}</span>
        </div>
        <div>
          Name:
          <span style={{ marginLeft: "10px" }}>{this.props.details[1]}</span>
        </div>
        <div>
          Issued by:
          <span style={{ marginLeft: "10px" }}>{this.props.details[3]}</span>
        </div>
        <div style={{ marginLeft: "10px" }}>
          email:
          <span>{" " + this.props.details[2]}</span>
        </div>
      </div>
    );
  }
}

export default CertFound;
