'use strict';

import './assets/container.scss';

import React from 'react';
import Navbar from 'components/Navbar/Navbar';
import CommentsContainer from 'components/Comments/CommentsContainer';
import Footer from 'components/Footer/Footer';

export default React.createClass({
  render() {
    return (
      <article>
        <div className="container">
          <header>
            <Navbar/>
          </header>
          <main className="main-context">
            <CommentsContainer/>
          </main>
        </div>
        <footer>
          <Footer/>
        </footer>
      </article>
    );
  }
});
