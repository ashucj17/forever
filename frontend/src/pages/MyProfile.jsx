import React, { useState, useEffect } from 'react'
import Title from '../components/Title'
import { Link } from 'react-router-dom'

const MyProfile = () => {
  const [userProfile, setUserProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: {
      street: '',
      city: '',
      state: '',
      pincode: '',
      country: ''
    }
  })
  
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [message, setMessage] = useState({ text: '', type: '' })
  
  useEffect(() => {
    // Load user profile from localStorage if available
    const savedProfile = localStorage.getItem('userProfile')
    if (savedProfile) {
      setUserProfile(JSON.parse(savedProfile))
    } else {
      // Set default profile for demo
      const defaultProfile = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phone: '555-123-4567',
        address: {
          street: '123 Main Street',
          city: 'New York',
          state: 'NY',
          pincode: '10001',
          country: 'USA'
        }
      }
      setUserProfile(defaultProfile)
      localStorage.setItem('userProfile', JSON.stringify(defaultProfile))
    }
  }, [])
  
  const handleChange = (e) => {
    const { name, value } = e.target
    
    if (name.includes('.')) {
      // Handle nested properties (address)
      const [parent, child] = name.split('.')
      setUserProfile(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }))
    } else {
      // Handle top-level properties
      setUserProfile(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSaving(true)
    
    // Simulate API call
    setTimeout(() => {
      // Save to localStorage
      localStorage.setItem('userProfile', JSON.stringify(userProfile))
      
      setIsSaving(false)
      setIsEditing(false)
      setMessage({ 
        text: 'Profile updated successfully!', 
        type: 'success' 
      })
      
      // Clear message after 3 seconds
      setTimeout(() => {
        setMessage({ text: '', type: '' })
      }, 3000)
    }, 1000)
  }
  
  return (
    <div className="border-t pt-10 pb-16 min-h-[60vh]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <Title text1="MY" text2="PROFILE" />
        </div>
        
        {message.text && (
          <div className={`mb-6 p-3 rounded text-center ${
            message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            {message.text}
          </div>
        )}
        
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-700">Personal Information</h2>
            {!isEditing ? (
              <button 
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 text-sm font-medium bg-gray-100 hover:bg-gray-200 rounded transition"
              >
                Edit Profile
              </button>
            ) : (
              <button 
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 rounded transition"
              >
                Cancel
              </button>
            )}
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">First Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="firstName"
                    value={userProfile.firstName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    required
                  />
                ) : (
                  <p className="text-gray-800">{userProfile.firstName}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Last Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="lastName"
                    value={userProfile.lastName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    required
                  />
                ) : (
                  <p className="text-gray-800">{userProfile.lastName}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Email Address</label>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={userProfile.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    required
                  />
                ) : (
                  <p className="text-gray-800">{userProfile.email}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Phone Number</label>
                {isEditing ? (
                  <input
                    type="tel"
                    name="phone"
                    value={userProfile.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  />
                ) : (
                  <p className="text-gray-800">{userProfile.phone}</p>
                )}
              </div>
            </div>
            
            <h3 className="text-lg font-medium text-gray-700 mb-4">Address Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-600 mb-1">Street Address</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="address.street"
                    value={userProfile.address.street}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  />
                ) : (
                  <p className="text-gray-800">{userProfile.address.street}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">City</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="address.city"
                    value={userProfile.address.city}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  />
                ) : (
                  <p className="text-gray-800">{userProfile.address.city}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">State/Province</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="address.state"
                    value={userProfile.address.state}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  />
                ) : (
                  <p className="text-gray-800">{userProfile.address.state}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Postal Code</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="address.pincode"
                    value={userProfile.address.pincode}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  />
                ) : (
                  <p className="text-gray-800">{userProfile.address.pincode}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Country</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="address.country"
                    value={userProfile.address.country}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  />
                ) : (
                  <p className="text-gray-800">{userProfile.address.country}</p>
                )}
              </div>
            </div>
            
            {isEditing && (
              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  disabled={isSaving}
                  className="px-6 py-2 bg-gray-900 text-white font-medium rounded hover:bg-gray-700 transition flex items-center"
                >
                  {isSaving ? (
                    <>
                      <span className="mr-2">Saving</span>
                      <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                    </>
                  ) : (
                    'Save Changes'
                  )}
                </button>
              </div>
            )}
          </form>
          
          <div className="mt-8 pt-6 border-t">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-medium text-gray-700">Account Actions</h3>
                <p className="text-sm text-gray-500 mt-1">Manage your account settings</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/orders" className="px-4 py-2 border border-gray-300 text-gray-700 text-center font-medium rounded hover:bg-gray-50 transition">
                  View Orders
                </Link>
                <Link to="/login" className="px-4 py-2 border border-red-500 text-red-500 text-center font-medium rounded hover:bg-red-50 transition">
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProfile