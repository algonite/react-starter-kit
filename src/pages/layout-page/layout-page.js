import React, { Component } from 'react';
import { Header } from './partials';
import s from './layout-page.scss';

console.log(s);

export default class LayoutPage extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className={s.root}>
        <Header />
        {children}
      </div>
    )
  }
}
