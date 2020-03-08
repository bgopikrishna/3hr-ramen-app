import React from 'react';
import './Filters.scss';

const Filters = ({
  onCountryChange,
  onSearchChange,
  countriesList,
  searchInputValue,
}) => {
  return (
    <div className='filter'>
      <div className='filter__item'>
        <label htmlFor='search'>Search: </label>
        <input
          type='search'
          name='search'
          placeholder='Search Restaurant by Name, Ramen Variety and Style '
          onChange={e => onSearchChange(e.target.value)}
          value={searchInputValue}
        />
      </div>
      <div className='filter__item'>
        <label htmlFor='countryfilter'>Filter by country: </label>
        <select
          className='filter__input'
          name='countryfilter'
          placeholder='Select country'
          onChange={e => onCountryChange(e.target.value)}
        >
          <option value=''>All</option>
          {countriesList.map(country => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filters;
