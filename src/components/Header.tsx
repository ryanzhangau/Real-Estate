import React from 'react';
import '../style/header.scss';

interface Option {
  label: string;
  value: string;
}

export interface HeaderProps {
  onSelect(status: string): void;
  filter: () => Array<string>;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { onSelect, filter } = props;
  const OptionList = () => {
    const options = [{ label: 'Fitler Status', value: '' }];
    filter().forEach(o => {
      options.push({ label: o.replace('_', ' '), value: o.toLowerCase() });
    });
    return options;
  };
  const options = OptionList().map((opt: Option, index: number) => {
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
