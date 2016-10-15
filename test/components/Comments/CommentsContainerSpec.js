'use strict';

import React from 'react';
import CommentsContainerInject from 'inject!components/Comments/CommentsContainer';
import {shallow} from 'enzyme';

describe('CommentsContainer', () => {
  it('renders comments based on entries in review data', () => {
    const CommentsContainer = CommentsContainerInject(getContainerInjects()).default;
    const wrapper = shallow(<CommentsContainer/>);

    const comments = wrapper.find('.comments-outer-box__inner-box').find('> comment');

    expect(comments.get('0').props).to.be.deep.equal({someProp1: 'test1', someProp2: 'test2'});
    expect(comments.get('1').props).to.be.deep.equal({someProp3: 'test3', someProp4: 'test4'});
  });
})

function getContainerInjects() {
  return {
    './Comment': React.createClass({
      displayName: 'comment',
      render: () => <div></div>
    }),
    'other/reviewData': [
      {
        key: 0,
        someProp1: 'test1',
        someProp2: 'test2',
      },
      {
        key: 1,
        someProp3: 'test3',
        someProp4: 'test4',
      }
    ]
  };
}
