import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Card, { Item } from './components/Card';

const App: React.FC = () => {
  const [filter, setFilter] = useState('');
  const [items, setItems] = useState([]);
  
  const updateFilter = (status: string) => {
    setFilter(status);
  };

  useEffect(() => {
    const getItems = async () => {
      const response = await fetch('/challenge/properties', { mode: 'cors' });
      const result = await response.json();
      setItems(result);
    };
    getItems();
  }, []);

  const propertyList = () => {
    let filteredItems = [...items];
    if (filter) filteredItems = [...items.filter((i: Item) => i.status === filter)];
    return filteredItems.map((p: Item) => {
      return <Card item={p} key={p.id} />;
    });
  };

  return (
    <div className='App'>
      <Header onSelect={updateFilter} />
      {propertyList()}
    </div>
  );
};

export default App;
