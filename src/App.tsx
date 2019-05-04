import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Card, { Item } from './components/Card';
import Loading from './components/Loading';
import './style/app.scss';

const App: React.FC = () => {
  const [filter, setFilter] = useState('');
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const updateFilter = (status: string) => {
    setFilter(status);
  };

  useEffect(() => {
    const getItems = async () => {
      const response = await fetch('/challenge/properties', { mode: 'cors' });
      const result = await response.json();
      setItems(result);
      setIsLoading(false);
    };
    getItems();
  }, []);

  const getFilter = (): Array<string> => {
    const filterOp: Set<string> = new Set();
    items.forEach((i: Item) => filterOp.add(i.status));
    return Array.from(filterOp);
  };

  const propertyList = () => {
    let filteredItems = [...items];
    if (filter) filteredItems = [...items.filter((i: Item) => i.status === filter)];
    return filteredItems.map((p: Item) => {
      return <Card item={p} key={p.id} />;
    });
  };

  const loading = () => {
    if (isLoading) return <Loading />;
    return null;
  };

  return (
    <div className='App'>
      <Header onSelect={updateFilter} filter={getFilter} />
      <div className='App_grid'>
        {propertyList()} {loading()}
      </div>
    </div>
  );
};

export default App;
