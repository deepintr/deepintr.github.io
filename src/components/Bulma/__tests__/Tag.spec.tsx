import React from 'react';
import renderer from 'react-test-renderer';
import Tag from '../Tag';

describe('<Tag />', () => {
  test('should render correctly', () => {
    const tree = renderer
      .create(
        <Tag size="normal" color="info">
          This is a Tag!
        </Tag>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
