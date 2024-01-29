import { ProductsCategories } from "./ProductsCategories"
import { ProductsList } from "./ProductsList"

export const ProductsPage = () => {
  return (
    <div className='products'>
      <ProductsCategories></ProductsCategories>
      <ProductsList></ProductsList>
    </div>
  )
}
