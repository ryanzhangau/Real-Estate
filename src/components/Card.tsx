import React from 'react';
import '../style/card.scss';

export interface Item {
  id: number;
  status: string;
  street: string;
  suburb: string;
  state: string;
  postcode: string;
  price: number;
  image: string;
}

interface CardProps {
  item: Item;
  key: number;
}

const Card: React.FC<CardProps> = (props: CardProps) => {
  const { item } = props;
  return (
    <div className='Card_wrap'>
      <span className='Card_price'>${item.price}</span>
      <span className='Card_status'>{item.status}</span>
      <span className='Card_featured-image'>
        <img src={item.image} alt={`${item.street} ${item.suburb}`} />
      </span>
      <span className='Card_street'>{item.street}</span>
      <span className='Card_suburb'>{item.suburb}</span>
      <span className='Card_state'>
        {item.state} {item.postcode}
      </span>
    </div>
  );
};

export default Card;
