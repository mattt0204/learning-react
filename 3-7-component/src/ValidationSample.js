import React, { Component } from 'react';
import './ValidationSample.css';
class ValidationSample extends Component {
  state = { password: '', clicked: false, validated: false };

  handleChange = e => {
    this.setState({ password: e.target.value });
  };

  handleClicked = e => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000'
    });
    this.superman.focus();
  };

  render() {
    return (
      <div>
        <input
          type="password"
          value={this.state.password}
          className={
            this.state.clicked
              ? this.state.validated
                ? 'success'
                : 'failure'
              : ''
          }
          onChange={this.handleChange}
          ref={ref => (this.superman = ref)}
        ></input>
        <button onClick={this.handleClicked}>Click</button>
      </div>
    );
  }
}

export default ValidationSample;
