import React from 'react'
import { Link } from 'react-router-dom';
import categories from '../../public/categories';
export const ProductsCategories = () => {

  return (
    <div className='products__categories'>
      <ul>
        {categories.map((category) => (
          <li key={category.path}>
            <Link to={`/products/${category.path}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
