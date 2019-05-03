import React from 'react';

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
    <div>
      <span>${item.price}</span>
      <span>{item.status}</span>
      <img src={item.image} alt={`${item.street} ${item.suburb}`} />
      <span>{item.street}</span>
      <span>{item.suburb}</span>
      <span>
        {item.state} {item.postcode}
      </span>
    </div>
  );
};

export default Card;
