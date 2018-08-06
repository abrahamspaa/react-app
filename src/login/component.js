import React, { Component } from 'react';
import { Button } from 'reactstrap';

export default class login extends Component {
  _onLogin(userToken) {
    this.setState({ userToken });
  }
  render() {
    return (
      <div>
        <Button color="primary" size="lg" onClick={() => this._onLogin(1)}>Login</Button>
      </div>
    );
  }
}
