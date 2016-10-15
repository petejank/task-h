'use strict';

import './assets/user-sub-comment.scss';
import './assets/user-sub-portrait.scss';

import React, {PropTypes} from 'react';

export default React.createClass({
  propTypes: {
    header: PropTypes.string.isRequired,
    portraitUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired
  },
  render() {
    return (
      <section>
        <div className="user-sub-comment">
          <div className="user-sub-comment__arrow"></div>
          <div className="user-sub-comment__header">{this.props.header}</div>
          <div className="user-sub-comment__text">
            {this.props.text}
          </div>
        </div>
        <div className="user-sub-portrait">
          <div className="user-sub-portrait__image-box">
            <img className="user-sub-portrait__image" src={`/thumbnails/${this.props.portraitUrl}`}/>
          </div>
          <div className="user-sub-portrait__name">
            {this.props.name}
          </div>
          <div className="user-sub-portrait__job">{this.props.job}</div>
        </div>
      </section>
    );
  }
});
