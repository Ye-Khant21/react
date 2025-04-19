import React from 'react'
import Rating from './Rating';
import { Link, useNavigate } from 'react-router-dom';
import useCartStore from '../store/useCartStore';
import toast from 'react-hot-toast';

const ProductCard = ({product:{id,title,price,image,rating:{rate}}}) => {
  const navigate = useNavigate();
  const {carts,addCart} = useCartStore()
  const handleAddCart = (event) => {
    event.stopPropagation()
    const newCart = {
      id : Date.now(),
      productId : id,
      quantity : 1,
    }
    addCart(newCart)
    toast.success("Added to cart")

  }
  const handleAddedBtn = (event) => {
    event.stopPropagation()
    toast.error("Already added to cart")
  }

  const handleAddCartBtn = () => {
    navigate(`/product-detail/${id}`)
  }



  return (
    <div onClick={handleAddCartBtn} to={`/product-detail/${id}`} className='border border-black p-5 flex flex-col items-start gap-5'>
     <img src={image} alt={title}  className='h-40'/>
     <p className='font-bold line-clamp-2'>
        {title}
     </p>
     <Rating rate={rate}></Rating>
    <div className='flex justify-between items-end w-full mt-auto'>
    <p >{price}</p>
    {carts.find((cart)=>(cart.productId == id)) ? <button onClick={handleAddedBtn} className='text-sm border border-black px-3 py-2 bg-black text-white' >Added</button> : <button className='text-sm border border-black px-3 py-2' onClick={handleAddCart} >Add cart</button>}
    </div>

    </div>
  )
}

export default ProductCard
