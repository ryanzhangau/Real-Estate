import React from 'react';
import { shallow } from '../enzyme';
import Header, { HeaderProps } from '../components/Header';

describe('<Header />', (): void => {
  let component: React.FC<HeaderProps> | null;
  const onSelect = jest.fn();
  beforeEach(() => {
    component = shallow(<Header onSelect={onSelect} />);
  });
});
