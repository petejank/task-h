'use strict';

import React from 'react';
import {shallow} from 'enzyme';
import Footer from 'components/Footer/Footer';

describe('Footer', () => {
  it('display current year in footer', () => {
    const currentYear = (new Date()).getFullYear();

    const wrapper = shallow(<Footer/>);
    expect(wrapper.contains(currentYear)).to.be.true;
  });
});
