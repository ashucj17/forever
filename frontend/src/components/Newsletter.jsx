import React, { useState } from 'react'
import Title from './Title'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.')
      return
    }

    setError('')
    setSubscribed(true)
    setEmail('')

    setTimeout(() => {
      setSubscribed(false)
    }, 5000)
  }

  return (
    <div className="py-20 px-4 text-center text-xs sm:text-sm md:text-base text-gray-700">
      <div className="mb-8">
        <Title text1="JOIN" text2="NEWSLETTER" />
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Subscribe to our newsletter and receive exclusive offers, early access to new products, and style tips from our team.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-2xl mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          autoComplete="email"
          className="flex-1 px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded"
          required
        />
        <button 
          type="submit" 
          onClick={handleSubmit}
          className="px-6 py-3 bg-gray-900 text-white font-medium transition duration-300 hover:bg-gray-700 rounded"
        >
          Subscribe
        </button>
      </div>

      {error && (
        <p className="text-red-500 mt-2 text-sm">{error}</p>
      )}

      {subscribed && (
        <div className="mt-4 p-3 bg-green-100 text-green-700 rounded text-center max-w-md mx-auto">
          Thank you for subscribing! Keep an eye on your inbox for exclusive deals.
        </div>
      )}

      <p className="text-xs text-gray-500 mt-4">
        By subscribing, you agree to our privacy policy and consent to receive marketing emails.
      </p>
    </div>
  )
}

export default Newsletter
