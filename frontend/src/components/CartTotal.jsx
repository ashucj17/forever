import React from 'react'

const CartTotal = ({
  subtotal = 0,
  shippingCost = 5.99,
  totalAmount = 0,
  currency = '$',
  totalItems = 0,
  freeShippingThreshold = 50,
  navigateToCheckout,
  buttonText = "Proceed to Checkout"
}) => {
  return (
    <div className="border p-4 rounded">
      <h3 className="font-medium text-lg mb-4">Order Summary</h3>
      
      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span>Items ({totalItems}):</span>
          <span>{currency}{subtotal.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between">
          <span>Shipping:</span>
          {shippingCost === 0 ? (
            <span className="text-green-600">Free</span>
          ) : (
            <span>{currency}{shippingCost.toFixed(2)}</span>
          )}
        </div>
        
        {subtotal > 0 && subtotal < freeShippingThreshold && (
          <div className="text-sm text-gray-600 mt-2">
            Add {currency}{(freeShippingThreshold - subtotal).toFixed(2)} more for free shipping!
          </div>
        )}
      </div>
      
      <div className="border-t pt-4 mt-2">
        <div className="flex justify-between font-medium text-lg">
          <span>Total:</span>
          <span>{currency}{totalAmount.toFixed(2)}</span>
        </div>
      </div>
      
      <button
        onClick={navigateToCheckout}
        disabled={totalItems === 0}
        className="w-full bg-black text-white py-3 rounded mt-4 hover:bg-gray-800 disabled:bg-gray-400"
      >
        {buttonText}
      </button>
    </div>
  )
}

export default CartTotal