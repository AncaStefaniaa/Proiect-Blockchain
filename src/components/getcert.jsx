import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import background from "../assets/bg.jpg";
import CertFound from "./certfound";

class Getcert extends Component {
  state = {
    id: "",
    txh: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  gettransaction = (event) => {
    event.preventDefault();
    const url = "https://ropsten.etherscan.io/tx/" + this.state.txh;
    window.open(url);
  };

  getcertificate = (event) => {
    event.preventDefault();
    this.props.getcertificate(this.state);
  };

  render() {
    return (
      <div
        style={{
          background: `url(${background}) no-repeat `,
          backgroundSize: "cover",
          height: "100vh",
          width: "100%",
          display: "flex",
        }}
        className="container-fluid "
      >
        <div className=" mx-auto w-50">
          <h1
            style={{
              color: "white",
              fontWeight: "bold",
            }}
            className=" mt-3 mb-4"
          >
            Verify the Certificate
          </h1>
          <Form
            className="px-3 pt-4"
            onSubmit={this.getcertificate}
            style={{ background: "rgba(255,255,255,0.5)" }}
          >
            <Form.Group>
              <Form.Control
                type="text"
                name="id"
                value={this.state.id}
                onChange={this.handleChange}
                placeholder="Enter Certificate ID"
              />
            </Form.Group>
            <Button
              className="mt-2 mb-3"
              variant="primary"
              type="submit"
              style={{
                backgroundColor: "#3A2149",
                fontWeight: "bold",
                borderRadius: "10px",
              }}
            >
              Get certificate
            </Button>
          </Form>
          {this.props.yes ? <CertFound details={this.props.details} /> : null}
        </div>

        <div className=" mx-auto w-50 mb-5">
          <h1
            style={{
              color: "white",
              fontFamily: "Montserrat",
              fontWeight: "bold",
            }}
            className="mt-3 mb-4"
          >
            Verify the Transaction details
          </h1>
          <Form
            className="px-3 pt-4"
            onSubmit={this.gettransaction}
            style={{
              marginBottom: "57px",
              background: "rgba(255,255,255,0.5)",
            }}
          >
            <Form.Group>
              <Form.Control
                type="text"
                name="txh"
                value={this.state.txh}
                onChange={this.handleChange}
                placeholder="Enter Transaction hash provided on Certificate"
              />
            </Form.Group>
            <Button
              className="mt-2 mb-3"
              variant="primary"
              type="submit"
              style={{
                border: "2px solid black",
                backgroundColor: "#3A2149",
                fontWeight: "bold",
                borderRadius: "10px",
              }}
            >
              Verify
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Getcert;
