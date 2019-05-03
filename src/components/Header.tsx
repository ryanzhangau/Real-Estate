import React from 'react';

interface Option {
  label: string;
  value: string;
}

export interface HeaderProps {
  onSelect(status: string): void;
}

const OptionList: Array<Option> = [
  { label: 'Fitler Status', value: '' },
  { label: 'Current', value: 'current' },
  { label: 'Sold', value: 'sold' }
];

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
    <header>
      <select name='filter' id='filter' onChange={e => onSelect(e.target.value)}>
        {options}
      </select>
    </header>
  );
};

export default Header;
