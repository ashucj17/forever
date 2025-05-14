import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'
import { Link } from 'react-router-dom'

const BestSeller = () => {
  const { products } = useContext(ShopContext)
  const [bestSeller, setBestSeller] = useState([])

  useEffect(() => {
    // Check if products is available and not empty
    if (products && products.length > 0) {
      // Debug logging to help identify issues
      console.log("All products:", products)
      
      const bestProduct = products.filter((item) => item.bestseller === true)
      console.log("Filtered best sellers:", bestProduct)
      
      setBestSeller(bestProduct.slice(0, 5))
    }
  }, [products]) // Add products as dependency to re-run when products change

  // If no best sellers found, show a message or fallback to some products
  const showEmptyState = bestSeller.length === 0

  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
        <Title text1={'BEST'} text2={'SELLERS'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Best Sellers in Clothing & Accessories
        </p>
      </div>

      {showEmptyState ? (
        <div className='text-center py-8 text-gray-600'>
          No best seller products available at the moment.
        </div>
      ) : (
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
          {bestSeller.map((item, index) => (
            <ProductItem 
              key={item._id || index} 
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price} 
            />
          ))}
        </div>
      )}

      <div className='text-center mt-8'>
        <Link to='/collection'>
          <button className='px-6 py-2 border border-gray-700 text-gray-700 rounded hover:bg-gray-700 hover:text-white transition duration-300'>
            View All
          </button>
        </Link>
      </div>
    </div>
  )
}

export default BestSeller