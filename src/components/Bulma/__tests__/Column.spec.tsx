import React from 'react';
import renderer from 'react-test-renderer';
import Column from '../Column';

describe('<Column />', () => {
  test('should render correctly', () => {
    const tree = renderer
      .create(<Column size={6}>This is a column!</Column>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
