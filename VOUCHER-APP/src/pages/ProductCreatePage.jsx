import React from 'react'
import Container from '../components/Container'
import Breadcrumb from '../components/Breadcrumb'
import ProductCreateCart from '../components/ProductCreateCart'

const ProductCreatePage = () => {
  return (
    <section>
    <Container>
    <Breadcrumb currentPageTitle={'Create '} links={[{title:"Product Module",path:"/product"}]}></Breadcrumb>
    <ProductCreateCart/>
     
    </Container>
   </section>
  )
}

export default ProductCreatePage
