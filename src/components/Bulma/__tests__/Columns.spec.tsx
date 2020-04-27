import React from 'react';
import renderer from 'react-test-renderer';
import Columns from '../Columns';

describe('<Columns />', () => {
  test('should render correctly', () => {
    const tree = renderer.create(<Columns>This is Columns!</Columns>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
