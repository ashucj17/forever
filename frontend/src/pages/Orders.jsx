import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import { Link } from 'react-router-dom'

const Orders = () => {
  const { products, currency } = useContext(ShopContext)
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get any saved orders from localStorage
    const savedOrders = localStorage.getItem('orders')
    const parsedOrders = savedOrders ? JSON.parse(savedOrders) : []
    
    // If no saved orders, generate some sample orders using products
    if (parsedOrders.length === 0 && products.length > 0) {
      const sampleOrders = products.slice(1, 4).map((product, index) => ({
        id: `order-${Date.now()}-${index}`,
        productId: product._id,
        productName: product.name,
        price: product.price,
        quantity: 1,
        size: 'M',
        image: product.image[0],
        date: '10,April,2025',
        status: 'Ready to ship'
      }))
      
      localStorage.setItem('orders', JSON.stringify(sampleOrders))
      setOrders(sampleOrders)
    } else {
      setOrders(parsedOrders)
    }
    
    setLoading(false)
  }, [products])

  if (loading) {
    return (
      <div className="border-t pt-16 min-h-[60vh] flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-black"></div>
      </div>
    )
  }

  return (
    <div className='border-t pt-16 min-h-[60vh]'>
      <div className='text-2xl mb-6'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>
      
      {orders.length > 0 ? (
        <div>
          {orders.map((order, index) => (
            <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
              <div className='flex items-start gap-6 text-sm'>
                <img className='w-16 sm:w-20 object-cover' src={order.image} alt="Order product" />
                <div>
                  <p className='sm:text-base font-medium'>{order.productName}</p>
                  <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                    <p className='text-lg'>{currency}{order.price}</p>
                    <p>Quantity: {order.quantity}</p>
                    <p>Size: {order.size}</p>
                  </div>
                  <p className='mt-2'>Date: <span className='text-gray-400'>{order.date}</span></p>
                </div>
              </div>
              <div className='md:w-1/2 flex justify-between'>
                <div className='flex items-center gap-2'>
                  <div className='w-2 h-2 rounded-full bg-green-500'></div>
                  <p className='text-sm md:text-base'>{order.status}</p>
                </div>
                <button className='border px-4 py-2 text-sm font-medium rounded-sm hover:bg-gray-50'>
                  Track Order
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-xl mb-4">You haven't placed any orders yet.</p>
          <Link to="/collection">
            <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
              Start Shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Orders