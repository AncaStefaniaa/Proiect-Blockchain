import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import background from "../assets/bg.jpg";

class Forms extends Component {
  state = {
    fname: "",
    lname: "",
    course: "",
    email: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  addcertificate = (event) => {
    event.preventDefault();
    this.props.addcertificate(this.state);
  };

  render() {
    return (
      <div
        className="container-fluid "
        style={{
          height: "1000px",
          background: `url(${background}) no-repeat `,
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            marginBottom: "117px",
            background: "rgba(255,255,255,0.5)",
            paddingTop: "100px!important",
          }}
          className="w-50 container pt-3 pb-3 mx-auto"
        >
          <h2
            style={{
              fontWeight: "bold",
            }}
            className="mb-2"
          >
            Enter the Certificate details
          </h2>
          <Form onSubmit={this.addcertificate}>
            <Form.Group>
              <Form.Control
                type="text"
                name="fname"
                value={this.state.fname}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="lname"
                value={this.state.lname}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="course"
                value={this.state.course}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button
              className="mt-3"
              variant="primary"
              type="submit"
              style={{
                border: "2px solid black",
                backgroundColor: "#3A2149",
                fontWeight: "bold",
                borderRadius: "10px",
              }}
            >
              Add certificate
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Forms;
