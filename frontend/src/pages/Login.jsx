import React, { useState } from 'react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const currentState = isLogin ? 'Login' : 'Sign Up';

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className='flex flex-col items-center w-full sm:max-w-96 m-auto mt-14 gap-8 text-gray-800'
    >
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-1.5 w-8 bg-gray-800' />
      </div>

      {!isLogin && (
        <input
          type="text"
  placeholder="Name"
  autoComplete="name"
  className="border-b-2 outline-none w-full py-2"
  required
        />
      )}

      <input
         type="email"
  placeholder="Email"
  autoComplete="email"
  className="border-b-2 outline-none w-full py-2"
  required
      />

      <input
         type="password"
  placeholder="Password"
  autoComplete={isLogin ? "current-password" : "new-password"}
  className="border-b-2 outline-none w-full py-2"
  required
      />

      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot your password</p>
        <p onClick={toggleAuthMode} className='cursor-pointer'>
          {isLogin ? 'Create Account' : 'Login Here'}
        </p>
      </div>

      <button
        type="submit"
        className="bg-gray-800 text-white py-2 px-6 rounded-md hover:bg-gray-700"
      >
        {currentState}
      </button>
    </form>
  );
};

export default Login;
