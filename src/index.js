import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import axios from 'axios';

axios.defaults.baseURL = process.env.API_URL;

ReactDOM.render(<Root />, document.getElementById('app'));
