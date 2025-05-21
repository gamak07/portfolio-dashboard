import React from 'react'

const CategoryDropdown = () => {
  return (
    <div className='absolute mt-2 w-48 bg-white rounded-lg shadow-lg z-10'>
        <div className='py-1'>
            <div className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>All</div>
            <div className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Web</div>
            <div className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Mobile</div>
            <div className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>AI/ML</div>
        </div>
    </div>
  )
}

export default CategoryDropdown