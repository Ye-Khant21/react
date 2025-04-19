import React from 'react'
import Container from '../components/Container'
import BreadCrumb from '../components/BreadCrumb'
import CartSection from '../components/CartSection'

function MyCart() {
  return (
    <Container className={'flex-grow px-5 mb-5'}>
      <BreadCrumb currentPageTitle={"My Cart"}/>
      <CartSection/>
    </Container>
  )
}

export default MyCart
