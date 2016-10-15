'use strict';

import './assets/navbar.scss';
import './assets/navbar-links.scss';
import './assets/navbar-logo.scss';

import React from 'react';

export default React.createClass({
  render() {
    return (
      <nav className="navbar">
        <h1 className="navbar-logo">
          <a href="/" className="navbar-logo__link" title="Holidaycheck"></a>
        </h1>
        <div className="navbar-links">
          <a href="/" className="navbar-links__link">
            <div className="navbar-links__link-text">Dashboard</div>
          </a>
          <a href="/" className="navbar-links__link navbar-links__link--active">
            <div className="navbar-links__link-text">Reviews</div>
          </a>
          <a href="/" className="navbar-links__link">
            <div className="navbar-links__link-text">Hotel Manager</div>
          </a>
          <a href="/" className="navbar-links__link">
            <div className="navbar-links__link-text">Settings</div>
          </a>
        </div>
      </nav>
    );
  }
});
