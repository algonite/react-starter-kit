import React, { Component } from 'react';
import { LayoutPage } from '../pages';

class LayoutContainer extends Component {
  render() {
    const { children } = this.props

    return (
      <LayoutPage
        children={children}
      />
    )
  }
}

export default LayoutContainer;
