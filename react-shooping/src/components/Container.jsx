import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className={ `w-full lg:w-[720px] xl:w-[1000px] mx-auto ${className}`}>
      {children}
    </div>
  )
}

export default Container
