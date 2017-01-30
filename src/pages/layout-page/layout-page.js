import React, { Component } from 'react';
import { Header } from './partials';

export default class LayoutPage extends Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <Header />
        {children}
      </div>
    )
  }
}
