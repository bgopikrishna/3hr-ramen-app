import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { API_ENDPOINT } from './constants';
import Card from './components/Card';
import Filters from './components/Filters';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [data, setData] = useState([]);
  const [filteredDataByCounty, setFilteredDataByCountry] = useState([]);

  const [filteredData, setFilteredData] = useState([]);
  const [countriesList, setCountriesList] = useState([]);

  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      let result = await axios.get(API_ENDPOINT);

      let countries = result.data.map(res => res['Country']);
      countries = countries.filter(
        (country, index) => countries.indexOf(country) === index
      );
      setCountriesList(countries);

      setData(result.data);
      setFilteredDataByCountry(result.data);
      setFilteredData(result.data);
    };
    fetchData();
  }, []);

  function handleCountryChange(country) {
    country = country.toLowerCase();
    console.log(country);

    const resByCountries = data.filter(res =>
      res['Country'].toLowerCase().includes(country)
    );

    console.log(resByCountries);

    setFilteredDataByCountry(resByCountries);
    setFilteredData(resByCountries);
    setSearchInput('');
  }

  function handleSearch(searchValue) {
    searchValue = searchValue.toLowerCase();

    setSearchInput(searchValue);

    const resBySearchValue = filteredDataByCounty.filter(res => {
      return (
        res['Brand'].toLowerCase().includes(searchValue) ||
        res['Variety'].toLowerCase().includes(searchValue) ||
        res['Style'].toLowerCase().includes(searchValue)
      );
    });

    setFilteredData(resBySearchValue);
  }

  return (
    <div className='App'>
      <Navbar></Navbar>
      <Filters
        onCountryChange={handleCountryChange}
        onSearchChange={handleSearch}
        countriesList={countriesList}
        searchInputValue={searchInput}
      ></Filters>
      <div className='grid'>
        {filteredData.map(res => (
          <Card key={res['Top Ten'] + res['Brand']} restaurant={res}></Card>
        ))}

        <span>{filteredData.length === 0 && 'No results'}</span>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
