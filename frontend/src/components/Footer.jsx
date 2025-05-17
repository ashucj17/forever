import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Logo = () => (
  <div className="flex items-center">
    <img src={assets.logo} className="mb-5 w-32" alt="Forever Logo" />
  </div>
)

const Footer = () => {
  return (
    <footer className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <Logo />
            <p className="text-gray-600 mt-4">
              Forever is your go-to destination for modern fashion and everyday essentials. 
              We blend style, comfort, and affordability to bring you collections that are made to last. 
              Join our community and embrace confident, effortless style every day.
            </p>
          </div>

          {/* Company Links */}
          <div className="md:mx-auto">
            <h3 className="text-lg font-semibold mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-gray-900">About Us</Link></li>
              <li><Link to="/delivery" className="text-gray-600 hover:text-gray-900">Delivery</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="md:ml-auto">
            <h3 className="text-lg font-semibold mb-4">GET IN TOUCH</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">+1 (800) 123-4567</li>
              <li className="text-gray-600">support@forever.com</li>
              <li>
                <a 
                  href="https://instagram.com/forever" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-gray-900"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-200 text-center text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Forever. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer