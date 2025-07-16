import React from 'react'

const ProductListEmptyStage = () => {
  return (
     <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200 ">
      <td className="px-6 py-4 text-center" colSpan="5">
          There are no products available
        </td>
       
      </tr>
  )
}

export default ProductListEmptyStage
