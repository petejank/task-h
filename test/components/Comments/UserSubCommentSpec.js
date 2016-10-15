'use strict';

import React from 'react';
import UserSubComment from 'components/Comments/UserSubComment';
import {shallow} from 'enzyme';

describe('UserSubComment', () => {
  it('fails to render when required props are not passed', () => {
    const stub = sinon.stub(console, 'error');

    try {
      shallow(<UserSubComment/>);
    } catch(error) {
      // Dummy
    }

    expect(stub.args[0][0]).to.contain(
      'Warning: Failed prop type: Required prop `header` was not specified in `UserSubComment`'
    );

    expect(stub.args[1][0]).to.contain(
      'Warning: Failed prop type: Required prop `portraitUrl` was not specified in `UserSubComment`'
    );

    expect(stub.args[2][0]).to.contain(
      'Warning: Failed prop type: Required prop `name` was not specified in `UserSubComment`'
    );

    expect(stub.args[3][0]).to.contain(
      'Warning: Failed prop type: Required prop `job` was not specified in `UserSubComment`'
    );

    console.error.restore();
  });
})
