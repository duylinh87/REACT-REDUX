import React, { Component } from "react";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      waitForLogin: false,
    };
  }

  checkLogin = () => {
    // Xu ly check login, sau do set waitForLogin = true
    // Tu dong login neu can (khi local store co token)
  };

  render() {
     this.state.waitForLogin = true

    return <div>{this.state.waitForLogin ? this.props.children : null}</div>;
  }
}

export default Auth;
