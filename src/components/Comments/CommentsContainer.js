'use strict';

import './assets/comments-box.scss';

import React from 'react';
import Comment from './Comment';

import reviewData from 'other/reviewData';

export default React.createClass({
  render() {
    return (
      <section className="comments-outer-box">
        <div className="comments-outer-box__inner-box">
          {reviewData.map(reviewEntry => <Comment {...reviewEntry}/>)}
        </div>
      </section>
    );
  }
});
