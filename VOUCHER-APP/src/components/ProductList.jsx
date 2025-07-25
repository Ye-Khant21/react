import React from 'react'
import { HiOutlinePencil, HiPlus, HiSearch } from 'react-icons/hi'
import { HiTrash } from 'react-icons/hi2'
import useSWR from 'swr';
import ProductListSkeletonLoader from './ProductListSkeletonLoader';
import ProductListEmptyStage from './ProductListEmptyStage';
import ProductRow from './ProductRow';
import { Link } from 'react-router-dom';

const fetcher = (url) => fetch(url).then((res) => res.json());

const ProductList = () => {
const { data, isLoading, error } = useSWR(
    import.meta.env.VITE_API_URL + "/products",
    fetcher
  );
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
<Link to={"/product/create"}  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add New Product  
  <HiPlus className="inline-block ms-2" />
</Link>

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

      {
        isLoading ? <ProductListSkeletonLoader/> :
      

   
    data.length===0 ? <ProductListEmptyStage/> : data.map((product) => <ProductRow product={product} key={product.id}/> )
   
}
    </tbody>
  </table>
</div>







    </div>
  )
}

export default ProductList
