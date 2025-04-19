import React from 'react'
import { act } from 'react';
import useCategoryStore from '../store/useCategoryStore';

const CategoryButton = ({category:{id,name,isActive}}) => {
  const {activeCategory} = useCategoryStore();
  const handleClick = () => {
    activeCategory(id);
  }
  return (

    <button onClick={handleClick} className={` ${isActive && "bg-black text-white" } text-nowrap border border-black px-4 py-2 me-2 `}>
      {name}      
    </button>
      
  )
}

export default CategoryButton
