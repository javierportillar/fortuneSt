import { ProductsCategories } from "./ProductsCategories"
import { ProductsList } from "./ProductsList"

export const ProductsPage = () => {
  return (
    <div className='products'>
      <ProductsCategories></ProductsCategories>
        <h1>Productos destacados:</h1>
      <div className="main__products">
        <ProductsList></ProductsList>
        <ProductsList></ProductsList>
        <ProductsList></ProductsList>
        <ProductsList></ProductsList>
        <ProductsList></ProductsList>
        <ProductsList></ProductsList>
        <ProductsList></ProductsList>
        <ProductsList></ProductsList>
        <ProductsList></ProductsList>
        <ProductsList></ProductsList>
        <ProductsList></ProductsList>
      </div>
    </div>
  )
}
