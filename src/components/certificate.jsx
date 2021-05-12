import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "../assets/style.css";
import printJs from "print-js";

class Certificate extends Component {
  state = {};
  onclickprint = (event) => {
    event.preventDefault();
    window.print();
  };
  render() {
    return (
      <div className="w-100 pc ">
        <div className="pt-3">
          <h3 style={{ color: "white" }}>Here is your certificate</h3>
          <div className="w-50 container pt-3 pb-3 mx-auto">
            <ul className="list-group">
              <li className="list-group-item">Name: {this.props.sname}</li>
              <li className="list-group-item">
                Course name: {this.props.course}
              </li>
              <li className="list-group-item">
                Transation id: {this.props.txh}
              </li>
              <li className="list-group-item">
                Certificate id: {this.props.id}
              </li>
            </ul>
          </div>
        </div>
        <Button
          className="btn"
          onClick={this.onclickprint}
          variant="success"
          type="submit"
          style={{
            backgroundColor: "#3A2149",
            fontWeight: "bold",
            borderRadius: "10px",
            marginBottom: "10px",
          }}
        >
          Print
        </Button>
      </div>
    );
  }
}

export default Certificate;
