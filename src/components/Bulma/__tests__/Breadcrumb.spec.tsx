import React from 'react';
import renderer from 'react-test-renderer';
import Breadcrumb from '../Breadcrumb';
import { Menu } from '../../../models';

describe('<Breadcrumb />', () => {
  test('should render correctly', () => {
    const items: Menu.NavLink[] = [
      {
        name: 'Test',
        url: {
          href: '/test',
          isInternal: true,
        },
      },
    ];
    const tree = renderer.create(<Breadcrumb items={items} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
