import React from 'react';
import { shallow } from '../enzyme';
import Header, { HeaderProps } from '../components/Header';
import { ShallowWrapper } from 'enzyme';

describe('<Header />', (): void => {
  let component: ShallowWrapper;
  const mockFunc = jest.fn();
  mockFunc.mockReturnValue(['current', 'sold']);
  const props: HeaderProps = {
    onSelect: () => jest.fn(),
    filter: () => mockFunc()
  };

  beforeEach(() => {
    component = shallow(<Header onSelect={props.onSelect} filter={props.filter} />);
  });

  it('renders header', () => {
    const header = component.find('header');
    expect(header.length).toBe(1);
  });

  it('tests the filter option', () => {
    const filter = component.find('option');
    expect(filter.length).toBe(3);
    expect(
      component
        .find('option')
        .at(1)
        .text()
    ).toBe('current');
    expect(
      component
        .find('option')
        .at(2)
        .text()
    ).toBe('sold');
  });

  it('should render header title', () => {
    const heading = component.find('div.Header_title');
    expect(heading.length).toBe(1);
    expect(heading.text()).toEqual('Real Estate');
  });
});
