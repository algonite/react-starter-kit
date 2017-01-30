import React, { Component } from 'react';
import { Link } from 'react-router';
import badge from '$images/badge.png';

export default class Header extends Component {
  render() {
    return (
      <div>
        <img src={badge} />
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </div>
    )
  }
}
