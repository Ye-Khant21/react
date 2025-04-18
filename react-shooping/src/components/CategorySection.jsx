import React from 'react'
import CategoryButton from './CategoryButton';
import Container from './Container';

const CategorySection = () => {
    const title = "Product Categories"
    const  categories = ["electrics", "clothes", "shoes", "computers", "books"];
  return (
    
       <section className='p-5'>
      <Container>
      <p className='text-sm text-gray-500 mb-2'> {title}</p>
     <div className='flex overflow-scroll category-button-group'>  
      <CategoryButton category="all" current={true}></CategoryButton>
      {categories.map((category) => <CategoryButton key={category} category = {category} current={false}/>)}
     </div>
      </Container>
    </section>
    
  )
}

export default CategorySection
