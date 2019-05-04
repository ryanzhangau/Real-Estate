import React from 'react';
import { shallow } from '../enzyme';
import Card from '../components/Card';
import { ShallowWrapper } from 'enzyme';

describe('<Card />', () => {
  let component: ShallowWrapper;
  const item = {
    id: 1,
    status: 'current',
    street: '1 test street',
    suburb: 'Test',
    state: 'Victoria',
    postcode: '3000',
    price: 1200000,
    image: '/testimage.jpg'
  };
  beforeEach(() => {
    component = shallow(<Card item={item} key={1} />);
  });

  it('should render card', () => {
    expect(component).toMatchSnapshot();
  });
});
