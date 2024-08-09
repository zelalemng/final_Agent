import React from 'react'

const Card = ({icon, title, value}) => {
  return (
    <div className='bg-white text-dark p-4 rounded-lg shadow-md flex items-center space-x-6
    dark:bg-gray-800 dark:text-white'>
        <div className='text-3xl text-gray-500'>{icon}</div>
        <div>
            <h2 className='text-lg font-semibold'>{title}</h2>
            <p className='text-xl'>{value}</p>
        </div>
    </div>
  )
}

export default Card
//bg-gray-100 text-gray-900 h-screen px-4 fixed w-64 md:w-64 border-r border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white