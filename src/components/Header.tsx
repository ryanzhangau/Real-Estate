import React from 'react';
import '../style/header.scss';

interface Option {
  label: string;
  value: string;
}

const OptionList: Array<Option> = [
  { label: 'Fitler Status', value: '' },
  { label: 'Current', value: 'current' },
  { label: 'Sold', value: 'sold' }
];
export interface HeaderProps {
  onSelect(status: string): void;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { onSelect } = props;

  const options = OptionList.map((opt: Option, index: number) => {
    return (
      <option value={opt.value} key={index}>
        {opt.label}
      </option>
    );
  });

  return (
    <header className='Header'>
      <div className='Header_title'>Real Estate</div>
      <select
        className='Header_filter'
        name='filter'
        id='filter'
        onChange={e => onSelect(e.target.value)}>
        {options}
      </select>
    </header>
  );
};

export default Header;
