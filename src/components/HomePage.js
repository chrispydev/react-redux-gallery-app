import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { productSearchCategory } from '../features/products/productSearchSlice';
// import '../App.css';
import Products from './Products';

function HomePage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [search, setSearch] = useState('iphone');

  function searchResults(event) {
    if (search.length > 0) {
      event.preventDefault();
      dispatch(productSearchCategory(search));
      history.push('/search');
    } else {
      event.stopPropagation();
      event.preventDefault();
    }
  }

  return (
    <div className="container home-page">
      <header style={{ backgroundImage: 'url(/images/banner.jpeg)' }}>
        <div className="header-container">
          <a
            href="/"
            className="profile-image"
            style={{ backgroundImage: 'url(/images/profile.png)' }}
          ></a>
          <div className="title">Amazon Item Gallery App</div>
          <div className="wrap">
            <form className="search" method="GET" onSubmit={searchResults}>
              <input
                type="text"
                id="searchTerm"
                placeholder="What are you looking for?"
                onChange={(event) => setSearch(event.target.value)}
              />
              <button
                type="submit"
                id="searchButton"
                onClick={() => searchResults}
              >
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      </header>
      <div className="main">
        <Products />
      </div>
      <footer>
        <p>Jakob Wolitzki @jakobowsky</p>
      </footer>
    </div>
  );
}

export default HomePage;
