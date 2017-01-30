import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
  render() {
    return (
      <ul>
        <li><Link to="/">Home</Link></li>
      </ul>
    )
  }
}
