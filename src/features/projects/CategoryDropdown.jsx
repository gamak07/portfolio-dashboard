import React from 'react'

const CategoryDropdown = () => {
  return (
    <div className='absolute mt-2 w-48 bg-white rounded-lg shadow-lg z-10 dark:bg-gray-800 dark:text-white'>
        <div className='py-1'>
            <div className='px-4 py-2 hover:bg-gray-100 cursor-pointer dark:hover:bg-gray-700'>All</div>
            <div className='px-4 py-2 hover:bg-gray-100 cursor-pointer dark:hover:bg-gray-700'>Web</div>
            <div className='px-4 py-2 hover:bg-gray-100 cursor-pointer dark:hover:bg-gray-700'>Mobile</div>
            <div className='px-4 py-2 hover:bg-gray-100 cursor-pointer dark:hover:bg-gray-700'>AI/ML</div>
        </div>
    </div>
  )
}

export default CategoryDropdown