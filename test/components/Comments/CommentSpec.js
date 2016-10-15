'use strict';

import React from 'react';
import CommentInject from 'inject!components/Comments/Comment';
import {shallow} from 'enzyme';

describe('Comment', () => {
  let Comment;

  beforeEach(() => {
    Comment = CommentInject({
      './UserSubComment': React.createClass({
        displayName: 'userSubComment',
        render: () => <div></div>
      })
    }).default;
  });

  it('fails to render when required props are not passed', () => {
    const stub = sinon.stub(console, 'error');

    try {
      shallow(<Comment/>);
    } catch(error) {
      // Dummy
    }

    expect(stub.args[0][0]).to.contain(
      'Warning: Failed prop type: Required prop `name` was not specified in `Comment`'
    );

    expect(stub.args[1][0]).to.contain(
      'Warning: Failed prop type: Required prop `portraitUrl` was not specified in `Comment`'
    );

    expect(stub.args[2][0]).to.contain(
      'Warning: Failed prop type: Required prop `date` was not specified in `Comment`'
    );

    expect(stub.args[3][0]).to.contain(
      'Warning: Failed prop type: Required prop `header` was not specified in `Comment`'
    );

    expect(stub.args[4][0]).to.contain(
      'Warning: Failed prop type: Required prop `text` was not specified in `Comment`'
    );

    expect(stub.args[5][0]).to.contain(
      'Warning: Failed prop type: Required prop `rating` was not specified in `Comment`'
    );

    expect(stub.args[6][0]).to.contain(
      'Warning: Failed prop type: Required prop `ratingStars` was not specified in `Comment`'
    );

    console.error.restore();
  });

  it('render thumbs up when props.rating is "up"', () => {
    const wrapper = shallow(
      <Comment name={''} portraitUrl={''} date={''} header={''} text={''} rating={''} rating={'up'} ratingStars={0}/>
    );

    expect(wrapper.find('.comment-rating__thumb').hasClass('comment-rating__thumb--positive')).to.be.true;
    expect(wrapper.find('.comment-rating__thumb .fa').hasClass('fa-thumbs-up')).to.be.true;
  });

  it('render thumbs down when props.rating is "down"', () => {
    const wrapper = shallow(
      <Comment name={''} portraitUrl={''} date={''} header={''} text={''} rating={''} rating={'down'} ratingStars={0}/>
    );

    expect(wrapper.find('.comment-rating__thumb').hasClass('comment-rating__thumb--negative')).to.be.true;
    expect(wrapper.find('.comment-rating__thumb .fa').hasClass('fa-thumbs-down')).to.be.true;
  });

  it('render golden stars based on props.ratingStars', () => {
    const wrapper1 = shallow(
      <Comment name={''} portraitUrl={''} date={''} header={''} text={''} rating={''} rating={''} ratingStars={3}/>
    );

    expect(wrapper1.find('.comment-stars .comment-stars__star--yellow').length).to.be.equal(3);

    const wrapper2 = shallow(
      <Comment name={''} portraitUrl={''} date={''} header={''} text={''} rating={''} rating={''} ratingStars={5}/>
    );

    expect(wrapper2.find('.comment-stars .comment-stars__star--yellow').length).to.be.equal(5);
  });

  it('render user sub comments if present', () => {
    const userSubComments = [
      {
        testProp1: 'testProp1',
        testProp2: 'testProp2'
      },
      {
        testProp3: 'testProp3',
        testProp4: 'testProp4'
      }
    ];

    const wrapper = shallow(
      <Comment name={''} portraitUrl={''} date={''} header={''} text={''} rating={''} rating={'down'} ratingStars={0}
        userSubComments={userSubComments}/>
    );

    expect(wrapper.find('userSubComment').length).to.be.equal(2);
    expect(wrapper.find('userSubComment').get(0).props).to.be.deep.equal({testProp1: 'testProp1', testProp2: 'testProp2'});
    expect(wrapper.find('userSubComment').get(1).props).to.be.deep.equal({testProp3: 'testProp3', testProp4: 'testProp4'});
  });
});
