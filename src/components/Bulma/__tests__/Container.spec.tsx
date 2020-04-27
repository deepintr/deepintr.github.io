import React from 'react';
import renderer from 'react-test-renderer';
import Container from '../Container';

describe('<Container />', () => {
  test('should render correctly', () => {
    const tree = renderer
      .create(
        <Container className="test-class">This is a Container!</Container>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
