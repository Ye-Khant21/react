import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { lineWobble } from 'ldrs'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
lineWobble.register()

// Default values shown


const ProductCreateCart = () => {
    const {register, handleSubmit,formState:{errors},reset} = useForm();
    const [isSending, setIsSending] =useState(false);
    const navigate = useNavigate();
    const handleCreateProduct = async(data) => {
      setIsSending(true);
      
      // Here you can handle the form submission, e.g., send data to an API
      // For now, we just log the data to the console
      // alert("Product created successfully!");
      // Reset the form or redirect as needed
      await fetch(import.meta.env.VITE_API_URL + "/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({product_name:data.product_name, price:data.price, created_at:data.created_at = new Date().toISOString()}),
      })
      setIsSending(false);
      reset();

      toast.success("Product created successfully!", {
        position: "top-right",
        duration: 1000,
      });
      if(data.back_to_list){
        navigate("/product");
      }

        
    }
  return (
    <div className='bg-stone-200 p-5 rounded-lg w-full md:w-1/2'>
      <h1 className='text-3xl mb-2 font-bold'> Create Product</h1>
      <p className='mb-10 text-stone-600 dark:text-stone-400'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui laboriosam, eveniet reiciendis aliquid ratione error ad iusto explicabo velit ut dolores, dolorem beatae molestias quod officia quam, natus doloremque dolor.

      </p>
      <form onSubmit={handleSubmit(handleCreateProduct)}>
       <div className='mb-5'>
  <div className='mb-3'>
    <label htmlFor="first_name" className={`block mb-2 text-sm font-medium ${errors.product_name ? "text-red-500" : "text-gray-900"} dark:text-white`}>Product Name</label>
    <input {...register("product_name",{required:true,minLength:3,maxLength:20})}type="text"  className= {`bg-gray-50  border text-gray-900 ${errors.product_name ? "border-red-300  focus:ring-red-500 focus:border-red-500" :  "border-gray-300  focus:ring-blue-500 focus:border-blue-500"} block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm rounded-lg`} placeholder="eg.apple"  />
    {errors.product_name && errors.product_name.type === "required" && <span className='text-red-500 text-sm mt-1'>Product name is required</span>}
    {errors.product_name && errors.product_name.type === "minLength" && <span className='text-red-500 text-sm'>Product name must be at least 3 characters</span>}
    {errors.product_name && errors.product_name.type === "maxLength" && <span className='text-red-500 text-sm'>Product name must be less than 20 characters</span>}
  </div>
  <div>
    <label htmlFor="last_name" className={`block mb-2 text-sm font-medium ${errors.price ? "text-red-500" : "text-gray-900"} dark:text-white`}>Price</label>
    <input  {...register("price",{required:true,min:100,max:1000000})}type="number"  className= {`bg-gray-50  border text-gray-900 ${errors.price ? "border-red-300  focus:ring-red-500 focus:border-red-500" :  "border-gray-300  focus:ring-blue-500 focus:border-blue-500"} block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm rounded-lg`} placeholder="eg. 500" />
    {errors.price && errors.price.type === "required" && <span className='text-red-500 text-sm mt-1'>Price is required</span>}
    {errors.price && errors.price.type === "min" && <span className='text-red-500 text-sm'>Price must be at least 100</span>}
    {errors.price && errors.price.type === "max" && <span className='text-red-500 text-sm'>Price must be less than 1000000</span>}
  </div>
</div>
<div className="flex items-center mb-4">
  <input  {...register("is_active")}id="all_correct" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"  />
  <label htmlFor="all_correct" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Make sure all fields are correct?</label>
</div>
<div className="flex items-center mb-4">
  <input  {...register("back_to_list")}id="back_to_list" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"  />
  <label htmlFor="back_to_list" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Back to the product lists</label>
</div>
<button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cancel</button>


<button  type="submit" className=" inline-flex  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> {isSending ? <l-line-wobble
  size="80"
  stroke="5"
  bg-opacity="0.1"
  speed="1.75" 
  color="black" 
></l-line-wobble> : "Create Product" }


</button>

      </form>
    </div>
  )
}

export default ProductCreateCart
