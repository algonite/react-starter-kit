import React, { Component } from 'react';

export default class Form extends Component {
  defaultState = {
    product: { name: '' }
  }

  state = this.defaultState

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.product);
    this.setState(this.defaultState)
  }

  handleChange(e) {
    this.setState({ product: { name: e.target.value } });
  }

  render() {
    const { name } = this.state.product;

    return (
      <form onSubmit={::this.handleSubmit}>
        <input onChange={::this.handleChange} value={name} />
      </form>
    )
  }
}
