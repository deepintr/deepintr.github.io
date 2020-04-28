import React from 'react';
import renderer from 'react-test-renderer';
import Level from '../Level';

describe('<Level />', () => {
  test('should render correctly', () => {
    const tree = renderer
      .create(
        <Level
          left={{
            items: [<h1 key="hi">Hi There!</h1>],
          }}
          right={{
            items: [<span key="hey">Hey, again!</span>],
            textCentered: true,
          }}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
