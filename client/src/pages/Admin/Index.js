import React, { Component } from "react";
import Admin from "./Admin";
import { withRouter } from "react-router";
import app from "../../components/base";

class AdminLogin extends Component {
  handleSignUp = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const user = await app
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
      this.props.history.push("/dashboard");
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return <Admin onSubmit={this.handleSignUp} />;
  }
}

export default withRouter(AdminLogin);