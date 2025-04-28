import React from 'react'
import ProductCart from './ProductCart'
import Container from './Container'
import useProductStore from '../store/useProductStore'
import useCategoryStore from '../store/useCategoryStore'

const ProductSection = () => {
  const {products} = useProductStore();
  const {categories} = useCategoryStore();
  const activeCategory = categories.find((category) => category.isActive === true);
  
  return (
    <section className='px-5 mb-5'>
    <Container>
    <p className='text-sm text-gray-500 mb-2'>
            Available Product List
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
            {products.filter((el)=> activeCategory.name === "All" ||el.category === activeCategory.name).map((product) => <ProductCart key={product.id} product = {product}/>)}</div>
    </Container>
    </section>
      
    
  )
}

export default ProductSection
