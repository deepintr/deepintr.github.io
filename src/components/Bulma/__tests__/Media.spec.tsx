import React from 'react';
import renderer from 'react-test-renderer';
import Media from '../Media';

describe('<Media />', () => {
  test('should render correctly', () => {
    const tree = renderer
      .create(
        <Media
          left={{
            size: 64,
          }}
          right={<span>Hi!</span>}
        >
          This is a Media element!
        </Media>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
