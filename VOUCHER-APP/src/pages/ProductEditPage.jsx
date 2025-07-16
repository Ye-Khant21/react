import React from 'react'
import Container from '../components/Container'
import Breadcrumb from '../components/Breadcrumb'
import ProductCreateCart from '../components/ProductCreateCart'
import ProductEditCart from '../components/ProductEditCart'

const ProductCreatePage = () => {
  return (
    <section>
    <Container>
    <Breadcrumb currentPageTitle={'Edit Product'} links={[{title:"Product Module",path:"/product"}]}></Breadcrumb>
    <ProductEditCart/>
     
    </Container>
   </section>
  )
}

export default ProductCreatePage
