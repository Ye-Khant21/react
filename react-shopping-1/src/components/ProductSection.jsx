import React from 'react'
import ProductCart from './ProductCart'
import Container from './Container'
import products from '../data/product'

const ProductSection = () => {
  
  return (
    <section className='px-5 mb-5'>
    <Container>
    <p className='text-sm text-gray-500 mb-2'>
            Available Product List
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
            {products.map((product) => <ProductCart key={product.id} product = {product}/>)}</div>
    </Container>
    </section>
      
    
  )
}

export default ProductSection
