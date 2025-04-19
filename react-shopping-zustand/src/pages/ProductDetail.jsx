import React from 'react'
import { Link, useParams } from 'react-router-dom';
import Container from '../components/Container';
import Rating from '../components/Rating';
import BreadCrumb from '../components/BreadCrumb';
import useProductStore from '../store/useProductStore';
import useCartStore from '../store/useCartStore';
import toast from 'react-hot-toast';

function ProductDetail() {
  const {products} = useProductStore();

  const {carts , addCart}= useCartStore();


  



    const {id} = useParams();
    const currentProduct = products.find(product => product.id == id);

    const handleAddCart = () => {
      addCart({
        id : Date.now(),
        productId : currentProduct.id,
        quantity : 1,
      })  
      toast.success("Added to cart")
    }
  
  
  return (
  <Container className={"px-5 mb-5"}>
    <BreadCrumb currentPageTitle={"Product Detail"}></BreadCrumb>
    <div className="border border-black p-10">
      <div className="grid grid-cols-1  md:grid-cols-2 gap-5">
        <div className="col-span-1">
          <img src={currentProduct.image} alt=""  className='md:w-3/4 block mb-5 md:mb-0 md:mx-auto h-[200px]' />
        </div>
        <div className="col-span-1 flex flex-col items-start gap-5">
        <h3 className='text-3xl font-bold'>{currentProduct.title}</h3>
        <p className='bg-gray-200 text-gray-700 inline-block px-5 py-1'>{currentProduct.category}</p>
        <p>{currentProduct.description}</p>
        <Rating rate={currentProduct.rating.rate}></Rating>
        <div className="flex justify-between items-end w-full mt-auto">
          <p>Price: {currentProduct.price}</p>
          {carts.find((cart)=>(cart.productId == id)) ? <button  className='text-sm border border-black px-3 py-2 bg-black text-white' >Added</button> : <button className='text-sm border border-black px-3 py-2' onClick={handleAddCart} >Add cart</button>}
          </div>
        </div>

      </div>
    </div>
  </Container>
  )
}

export default ProductDetail
