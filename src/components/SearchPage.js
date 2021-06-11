import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { productSearchCategory } from '../features/products/productSearchSlice';
import SearchResults from './SearchResults';
import Loader from './Loader';

function SearchPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const results = useSelector((state) => state.productSearch.search);
  const status = useSelector((state) => state.productSearch.status);
  const [search, setSearch] = useState('');

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

  let checkShow;
  if (status === 'succeeded') {
    checkShow = <SearchResults results={results} />;
  } else if (status === 'loading') {
    checkShow = (
      <>
        <Loader />
      </>
    );
  } else if (results.length === 0) {
    checkShow = <h1>Search for something</h1>;
  } else if (status === 'error') {
    checkShow = <h1>Could not get results</h1>;
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
                // disabled={(search.length = 0 ? true : false)}
                onClick={() => searchResults}
              >
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      </header>
      <div className="main">{checkShow}</div>
      <footer>
        <p>Jakob Wolitzki @jakobowsky</p>
      </footer>
    </div>
  );
}

export default SearchPage;
