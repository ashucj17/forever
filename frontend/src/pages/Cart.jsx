import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import RelatedProduct from '../components/RelatedProduct'
import CartTotal from '../components/CartTotal'

const Cart = () => {
  const { products, currency, cartItems, addToCart, removeFromCart, navigate } = useContext(ShopContext)
  const [cartData, setCartData] = useState([])
  const [cartProducts, setCartProducts] = useState([])
  const [loading, setLoading] = useState(true)
  
  // Extract cart data from cart items
  useEffect(() => {
    const tempData = []
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          tempData.push({
            _id: itemId,
            size: size,
            quantity: cartItems[itemId][size]
          })
        }
      }
    }
    setCartData(tempData)
    
    // Save cart items to localStorage whenever they change
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])

  // Fetch product details for cart items
  useEffect(() => {
    if (products.length > 0 && cartData.length > 0) {
      const productsWithDetails = cartData.map(item => {
        const productDetails = products.find(product => product._id === item._id)
        return {
          ...item,
          name: productDetails?.name || 'Product Not Found',
          price: productDetails?.price || 0,
          image: productDetails?.image?.[0] || '',
          stock: productDetails?.stock || 10,
          category: productDetails?.category || '',
          subCategory: productDetails?.subCategory || ''
        }
      })
      setCartProducts(productsWithDetails)
      setLoading(false)
    } else {
      setLoading(false)
    }
  }, [products, cartData])

  // Calculate total amount
  const calculateSubtotal = () => {
    return cartProducts.reduce((total, item) => {
      return total + (item.price * item.quantity)
    }, 0)
  }

  // Handle quantity change
  const handleQuantityChange = (id, size, newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      // Update locally first for immediate UI feedback
      setCartProducts(prev => 
        prev.map(item => 
          item._id === id && item.size === size 
            ? {...item, quantity: newQuantity} 
            : item
        )
      )
      
      // Use the addToCart function from context which should handle cart updates
      // This assumes addToCart accepts a product ID, size, and quantity
      addToCart(id, size, newQuantity, true) // The last parameter indicates this is an update, not an add
    }
  }

  // Handle item removal
  const handleRemoveItem = (id, size) => {
    // Remove locally first for immediate UI feedback
    setCartProducts(prev => prev.filter(item => !(item._id === id && item.size === size)))
    
    // Use the removeFromCart function from context
    removeFromCart(id, size)
  }

  if (loading) {
    return (
      <div className="border-t pt-14 min-h-[60vh] flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-black"></div>
      </div>
    )
  }

  // Calculate values after loading is complete
  const subtotal = calculateSubtotal()
  const freeShippingThreshold = 50
  const shippingCost = subtotal >= freeShippingThreshold ? 0 : 5.99
  const totalAmount = subtotal + shippingCost

  return (
    <div className="border-t pt-8 pb-16">
      <div className="text-2xl mb-8">
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      {cartProducts.length > 0 ? (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-3/4">
            {cartProducts.map((item, index) => (
              <div key={`${item._id}-${item.size}`} className="flex flex-col sm:flex-row gap-4 border-b py-4">
                <div className="sm:w-24 sm:h-24 flex-shrink-0">
                  <Link to={`/product/${item._id}`}>
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </Link>
                </div>
                <div className="flex-grow flex flex-col justify-between">
                  <div className="flex justify-between">
                    <Link to={`/product/${item._id}`}>
                      <h3 className="font-medium text-lg hover:text-gray-700">{item.name}</h3>
                    </Link>
                    <span className="font-medium">{currency}{(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    <p>Size: {item.size}</p>
                    <p>Price: {currency}{item.price}</p>
                    {item.stock <= 5 && (
                      <p className="text-red-500">Only {item.stock} left in stock!</p>
                    )}
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center border rounded">
                      <button 
                        onClick={() => handleQuantityChange(item._id, item.size, item.quantity - 1)}
                        className="px-3 py-1 border-r hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="px-4 py-1">{item.quantity}</span>
                      <button 
                        onClick={() => handleQuantityChange(item._id, item.size, item.quantity + 1)}
                        className="px-3 py-1 border-l hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                    <button 
                      onClick={() => handleRemoveItem(item._id, item.size)}
                      className="text-sm text-gray-500 hover:text-red-500 flex items-center gap-1"
                    >
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/4">
            <CartTotal 
              subtotal={subtotal}
              shippingCost={shippingCost}
              totalAmount={totalAmount}
              currency={currency}
              totalItems={cartProducts.reduce((acc, item) => acc + item.quantity, 0)}
              freeShippingThreshold={freeShippingThreshold}
              navigateToCheckout={() => navigate('/place-order')}
            />
          </div>
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="mb-6">
            <img src={assets.empty_cart} alt="Empty Cart" className="w-24 h-24 mx-auto opacity-50" />
          </div>
          <h2 className="text-2xl font-medium mb-3">Your cart is empty</h2>
          <p className="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet.</p>
          <Link to="/collection">
            <button className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800">
              Start Shopping
            </button>
          </Link>
        </div>
      )}

      {cartProducts.length > 0 && (
        <div className="mt-12">
          <h3 className="text-xl font-medium mb-4">You might also like</h3>
          <div>
            {cartProducts.length > 0 && (
              <RelatedProduct 
                category={cartProducts[0].category} 
                subCategory={cartProducts[0].subCategory} 
              />
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart