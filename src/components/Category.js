import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsCategory } from '../features/products/productsCategorySlice';

function Category() {
  const categories = useSelector((state) => state.productsCategory.category);
  const params = useSelector((state) => state.productsCategory.params);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsCategory(params));
  }, [dispatch, params]);

  return (
    <>
      {categories.map((category, index) => (
        <>
          <div key={index} className="post-container">
            <div className="post-content">
              <img className="post-image" src={category.photo} alt="title" />
              <div className="post-title">
                <h4>{category.title.substring(0, 30)}</h4>
                <hr />
                <h4>${category.price}</h4>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
}

export default Category;
