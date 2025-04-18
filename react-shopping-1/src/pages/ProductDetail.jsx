import React from 'react'
import { useParams } from 'react-router-dom';
import products from '../data/product';
import Container from '../components/Container';
import Rating from '../components/Rating';
import BreadCrumb from '../components/BreadCrumb';

function ProductDetail() {
    const {id} = useParams();
    const currentProduct = products.find(product => product.id == id);
  return (
  <Container>
    <BreadCrumb currentPageTitle={"Product Detail"}></BreadCrumb>
    <div className="border border-black p-10">
      <div className="grid grid-cols-2 gap-5">
        <div className="col-span-1">
          <img src={currentProduct.image} alt=""  className='w-3/4 block mx-auto' />
        </div>
        <div className="col-span-1 flex flex-col items-start gap-5">
        <h3 className='text-3xl font-bold'>{currentProduct.title}</h3>
        <p className='bg-gray-200 text-gray-700 inline-block px-5 py-1'>{currentProduct.category}</p>
        <p>{currentProduct.description}</p>
        <Rating rate={currentProduct.rating.rate}></Rating>
        <div className="flex justify-between items-end w-full mt-auto">
          <p>Price: {currentProduct.price}</p>
          <button className='text-sm border border-black px-3 py-2' >Add cart</button>
        </div>
        </div>

      </div>
    </div>
  </Container>
  )
}

export default ProductDetail
