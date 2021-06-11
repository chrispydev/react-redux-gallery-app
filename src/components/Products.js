import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { fetchProducts } from '../features/products/productsSlice';
import { getParameter } from '../features/products/productsCategorySlice';

function Products() {
  const allProducts = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  function setUrlParams(event) {
    dispatch(getParameter(event));
    history.push('/categories');
  }

  return (
    <>
      {allProducts.map((product, index) => (
        <>
          <div className="post-container">
            <div
              className="post-content"
              onClick={() => setUrlParams(product.id)}
            >
              <img
                className="post-image"
                src={product.random_photo}
                alt="title"
              />
              <div>
                <div className="post-title">
                  <h4>{product.name}</h4>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
}

export default Products;
