import React from 'react'
import { Link } from 'react-router-dom'

const CartTotal = ({
  subtotal,
  shippingCost,
  totalAmount,
  currency,
  totalItems,
  freeShippingThreshold,
  navigateToCheckout = () => {},
}) => {
  return (
    <div className="border rounded-lg p-6 sticky top-24">
      <h2 className="text-xl font-medium mb-4">Order Summary</h2>

      <div className="space-y-3 mb-4">
        <div className="flex justify-between">
          <span>Subtotal ({totalItems} items)</span>
          <span>{currency}{(subtotal ?? 0).toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>{shippingCost === 0 ? 'FREE' : `${currency}${(shippingCost ?? 0).toFixed(2)}`}</span>

        </div>

        {subtotal < freeShippingThreshold && (
          <div className="text-sm text-gray-600 mt-2">
           Add {currency}{(freeShippingThreshold - (subtotal ?? 0)).toFixed(2)} more to qualify for FREE shipping
            <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
              <div 
                className="bg-green-500 h-2 rounded-full" 
                stylestyle={{ width: `${((subtotal ?? 0) / freeShippingThreshold) * 100}%` }}
              ></div>
            </div>
          </div>
        )}

        <div className="border-t pt-3 mt-3 font-medium flex justify-between">
          <span>Total</span>
          <span>{currency}{(totalAmount ?? 0).toFixed(2)}</span>
        </div>
      </div>

      <Link to="/place-order">
        <button onClick={navigateToCheckout} className="w-full bg-black text-white hover:bg-gray-500 py-3 rounded-full font-medium mb-3">
          Proceed to Checkout
        </button>
      </Link>

      <Link to="/collection">
        <button className="w-full border border-gray-300 hover:bg-gray-50 py-3 rounded-full">
          Continue Shopping
        </button>
      </Link>

      <div className="mt-6 text-xs text-gray-500">
        <p className="flex items-center gap-1">
          <span className="text-green-600">✓</span> Secure checkout
        </p>
        <p className="flex items-center gap-1 mt-1">
          <span className="text-green-600">✓</span> Free returns within 30 days
        </p>
      </div>
    </div>
  )
}

export default CartTotal