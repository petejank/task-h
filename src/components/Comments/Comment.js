'use strict';

import './assets/comment.scss';
import './assets/comment-rating.scss';
import './assets/comment-stars.scss';

import React, {PropTypes} from 'react';
import classNames from 'classnames';
import UserSubComment from './UserSubComment';

const MAX_STARS = 6;

export default React.createClass({
  propTypes: {
    name: PropTypes.string.isRequired,
    portraitUrl: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    ratingStars: PropTypes.number.isRequired,
    userSubComments: PropTypes.array
  },
  render() {
    const commentThumbIcon = classNames({
      [`fa fa-thumbs-${this.props.rating}`]: true
    });

    const commentThumb = classNames({
      'comment-rating__thumb': true,
      'comment-rating__thumb--positive': this.props.rating === 'up',
      'comment-rating__thumb--negative': this.props.rating === 'down'
    });

    return (
      <section>
        {/* Review/comment core */}
        <div className="comment">
          <div className="comment__portrait-box">
            <img className="comment__portrait" src={`/thumbnails/${this.props.portraitUrl}`}/>
          </div>
          <div className="comment__name">
            {this.props.name}
          </div>
          <div className="comment__date">
            {this.props.date}
          </div>
          <h2 className="comment__title">
            {this.props.header}
          </h2>
          <div className="comment-rating">
            <div className={commentThumb}>
              <i className={commentThumbIcon} aria-hidden="true"></i>
            </div>
            <div className="comment-stars">
              {getStarsElm.call(this)}
              <span className="comment-stars__sum">{this.props.ratingStars} / {MAX_STARS}</span>
            </div>
          </div>
          <div className="comment__description">
            {this.props.text}
          </div>
          <a href="/" className="comment__add-button">Add comment</a>
          {/* User comments to this review/comment */}
          {this.props.userSubComments && this.props.userSubComments.length ? getUserSubComments.call(this) : null}
        </div>
      </section>
    );
  }
});

function getUserSubComments() {
  return this.props.userSubComments.map((subComment, index) => <UserSubComment key={index} {...subComment}/>);
}

function getStarsElm() {
  let stars = [];
  for (let i = 0; i < MAX_STARS; i++) {
    const commentClass = classNames({
      'fa fa-star comment-stars__star': true,
      'comment-stars__star--yellow': i < this.props.ratingStars
    });

    stars.push(<i key={i} className={commentClass} aria-hidden="true"></i>);
  }

  return stars;
}
