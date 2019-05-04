import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Card, { Item } from './components/Card';
import Loading from './components/Loading';
import ErrorMsg from './components/ErrorMsg';
import './style/app.scss';

const App: React.FC = () => {
  const [filter, setFilter] = useState('');
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState('');
  const updateFilter = (status: string) => {
    setFilter(status);
  };
  const getItems = async () => {
    setIsLoading(true);
    setErr('');
    try {
      const response = await fetch('/challenge/properties', { mode: 'cors' });
      const result = await response.json();
      setItems(result);
    } catch (e) {
      console.log(e);
      setErr('Cannot connect to server, please click reload button.');
    }
    setIsLoading(false);
  };
  useEffect(() => {
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

  const showErr = () => {
    if (err) return <ErrorMsg error={err} onClick={getItems} />;
    return null;
  };

  return (
    <div className='App'>
      <Header onSelect={updateFilter} filter={getFilter} />
      <div className='App_grid'>
        {propertyList()} {loading()} {showErr()}
      </div>
    </div>
  );
};

export default App;
