import React from 'react'
import { HiOutlinePencil, HiPlus, HiSearch } from 'react-icons/hi'
import { HiTrash } from 'react-icons/hi2'

const ProductList = () => {
  return (
    <div>
        
      
     
        <div className='flex justify-between mb-4'>

<div className="">
<div className="relative mb-6">
  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
   <HiSearch/>
  </div>
  <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-gray-900" placeholder="search product" />
</div>



</div>
<div className="">
<button  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add New Product  
  <HiPlus className="inline-block ms-2" />
</button>

</div>
</div>

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          #
        </th>
        <th scope="col" className="px-6 py-3">
          Product name
        </th>
        <th scope="col" className="px-6 py-3 text-end">
          Created At 
        </th>
        <th scope="col" className="px-6 py-3 text-end">
          Price
        </th>
        <th scope="col" className="px-6 py-3 text-end">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200 hidden last: table-row">
      <td className="px-6 py-4 text-center" colSpan="5">
          There are no products available
        </td>
       
      </tr>
      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          1
        </th>
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          Apple MacBook Pro 17"
        </th>
        <td className="px-6 py-4 text-end">
          $2999
        </td>
        <td className="px-6 py-4 text-end">
          <p className="text-xs">24 Sep 2024</p>
          <p className="text-">10:00 AM</p>
        </td>
        <td className="px-6 py-4 flex justify-end items-center space-x-2">


<div className="inline-flex rounded-md shadow-xs" role="group">
  <button type="button" className="px-4 py-2 text-sm font-medium text-stone-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 focus:z-10 focus:ring-2 focus:ring-gray-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
    <HiOutlinePencil className="inline-block me-2" />
  
  </button>
 
  <button type="button" className="px-4 py-2 text-sm font-medium text-stone-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 focus:z-10 focus:ring-2 focus:ring-gray-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
    <HiTrash className="inline-block me-2" />
  </button>
</div>

         
        </td>
      </tr>
    
    </tbody>
  </table>
</div>







    </div>
  )
}

export default ProductList
