import React, { Component } from "react";
import background from "../assets/bg.jpg";
import { Form, Button } from "react-bootstrap";

class Intro extends Component {
  state = {
    fname: "",
    lname: "",
    course: "",
    email: "",
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
        <h1
          style={{
            color: "white",
          }}
        >
          Register
        </h1>

        <Form onSubmit={this.addcertificate}>
          <Form.Group>
            <Form.Control
              type="text"
              name="fname"
              value={this.state.fname}
              onChange={this.handleChange}
              placeholder="First name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              name="lname"
              value={this.state.lname}
              onChange={this.handleChange}
              placeholder="Last name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="Email@email.com"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              name="course"
              value={this.state.course}
              onChange={this.handleChange}
              placeholder="Course name"
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
    );
  }
}

export default Intro;
