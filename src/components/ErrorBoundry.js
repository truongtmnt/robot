import React, { Component } from "react";

export class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Has error</h1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundry;
