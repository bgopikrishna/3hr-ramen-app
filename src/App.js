import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { API_ENDPOINT } from './constants';
import Card from './components/Card';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let result = await axios.get(API_ENDPOINT);

      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className='App'>
      {data.map(res => (
        <Card key={res} restaurant={res}></Card>
      ))}
    </div>
  );
}

export default App;
