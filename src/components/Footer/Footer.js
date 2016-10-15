'use strict';

import './assets/footer.scss';

import React from 'react';

export default React.createClass({
  render() {
    const currentYear = (new Date()).getFullYear();

    return (
      <div className="footer">© 1999 - {currentYear} HolidayCheck AG</div>
    );
  }
});
