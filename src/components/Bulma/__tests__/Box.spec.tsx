import React from 'react';
import renderer from 'react-test-renderer';
import Box from '../Box';

describe('<Box />', () => {
  test('should render correctly', () => {
    const tree = renderer.create(<Box content>This is a Box!</Box>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
