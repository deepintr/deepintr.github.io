import React from 'react';
import renderer from 'react-test-renderer';
import Hero from '../Hero';

describe('<Hero />', () => {
  test('should render correctly', () => {
    const heroHead = <h1>Hero Head</h1>;
    const heroBody = <div>Hero Body</div>;
    const heroFoot = <span>Hero Footer</span>;

    const tree = renderer
      .create(
        <Hero
          heroHead={heroHead}
          heroBody={heroBody}
          heroFoot={heroFoot}
          particles
          size="medium"
        >
          This is a Box!
        </Hero>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
