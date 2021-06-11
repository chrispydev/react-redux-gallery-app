import React from 'react';

function SearchResults({ results }) {
  return (
    <>
      {results?.map((result, index) => (
        <>
          <div key={index} className="post-container">
            <div className="post-content">
              <img className="post-image" src={result.photo} alt="title" />
              <div>
                <div className="post-title">
                  <h4>{result.title.substring(0, 30)}</h4>
                  <hr />
                  <h4> ${result.price}</h4>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
}

export default SearchResults;
