import React, { useState } from 'react'

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up')

  const onSubmitHandler =(event) =>{
    event.preventDefault()
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-8 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl w-auto bg-gray-800 text-white px-2 py-1 rounded'>
          {currentState}
        </p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>

      {currentState === 'Login' ? '' : <input
        type="text"
        placeholder="Name"
        className="border-b-2 outline-none w-full py-2" required
      /> } 

      <input
        type="email"
        placeholder="Email"
        className="border-b-2 outline-none w-full py-2" required
      />
      <input
        type="password"
        placeholder="Password"
        className="border-b-2 outline-none w-full py-2" required
      />

      <div className='w-full flex justify-between text-sm mt-[-8px]' >
        <p className='cursor-pointer'>Forgot your password</p>  
      
      {
        currentState === 'Login'
        ? <p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer'>Create Account</p>
        : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
      }
      </div>

      <button
        type="submit"
        className="bg-gray-800 text-white py-2 px-6 rounded-md hover:bg-gray-700"
      >
        {currentState}
      </button>

      <button
        type="button"
        onClick={() =>
          setCurrentState(currentState === 'Sign Up' ? 'Login' : 'Sign Up')
        }
        className="text-blue-600 underline text-sm"
      >
        Switch to {currentState === 'Sign Up' ? 'Login' : 'Sign Up'}
      </button>
    </form>
  )
}

export default Login