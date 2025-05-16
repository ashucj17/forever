import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { ShopContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {
  const { products, currency, cartItems } = useContext(ShopContext)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  
  // Calculate cart data
  const calculateCartData = () => {
    const cartProducts = []
    let subtotal = 0
    
    // Process cart items
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          const productDetails = products.find(product => product._id === itemId)
          if (productDetails) {
            const quantity = cartItems[itemId][size]
            const itemPrice = productDetails.price * quantity
            subtotal += itemPrice
            
            cartProducts.push({
              _id: itemId,
              name: productDetails.name,
              price: productDetails.price,
              quantity,
              size,
              image: productDetails.image?.[0] || ''
            })
          }
        }
      }
    }
    
    // Calculate shipping and total
    const freeShippingThreshold = 50
    const shippingCost = subtotal >= freeShippingThreshold ? 0 : 5.99
    const totalAmount = subtotal + shippingCost
    const totalItems = cartProducts.reduce((acc, item) => acc + item.quantity, 0)
    
    return {
      cartProducts,
      subtotal,
      shippingCost,
      totalAmount,
      totalItems,
      freeShippingThreshold
    }
  }
  
  const {
    subtotal,
    shippingCost,
    totalAmount,
    totalItems,
    freeShippingThreshold
  } = calculateCartData()
  
  const handlePlaceOrder = () => {
    // Implement order placement logic here
    setLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      // Show success message
      alert('Order placed successfully!')
      setLoading(false)
      
      // Navigate to orders page
      navigate('/orders')
    }, 1500)
  }

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* Left-side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
        </div>
        <div className='flex gap-3'>
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First name' required />
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last name' required />
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email Address' required />
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street' required />
        <div className='flex gap-3'>
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Pincode' required />
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' required />
        </div>
        <div className='flex gap-3'>
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State' required />
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country' required />
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="tel" placeholder='Phone' required />
      </div>
      
      {/* Right-side */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          {loading ? (
            <div className="flex justify-center items-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-4 border-gray-300 border-t-black"></div>
            </div>
          ) : (
            <CartTotal 
              subtotal={subtotal}
              shippingCost={shippingCost}
              totalAmount={totalAmount}
              currency={currency}
              totalItems={totalItems}
              freeShippingThreshold={freeShippingThreshold}
              navigateToCheckout={handlePlaceOrder}
              buttonText="Place Order"
            />
          )}
        </div>
        <div className="mt-12">
          <Title text1={'PAYMENT'} text2={'METHOD'}/>
        </div>
        <div className='flex gap-3 flex-col lg:flex-row'>
          <div className="border border-gray-300 rounded p-4 w-full">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="payment" defaultChecked />
              <span>Credit/Debit Card</span>
            </label>
          </div>
          <div className="border border-gray-300 rounded p-4 w-full">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="payment" />
              <span>Cash on Delivery</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder