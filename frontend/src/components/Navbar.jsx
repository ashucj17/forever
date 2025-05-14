import React, { useState, useContext } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch } = useContext(ShopContext);
  const location = useLocation();

  return (
    <div className='flex items-center justify-between py-5 font-medium'>

      <Link to='/'><img src={assets.logo} className='w-36' alt="site-logo" /></Link>

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>Home</p>
          <hr className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${location.pathname === '/' ? 'block' : 'hidden'}`} />
        </NavLink>
        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
          <p>Collection</p>
          <hr className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${location.pathname === '/collection' ? 'block' : 'hidden'}`} />
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p>About</p>
          <hr className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${location.pathname === '/about' ? 'block' : 'hidden'}`} />
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p>Contact</p>
          <hr className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${location.pathname === '/contact' ? 'block' : 'hidden'}`} />
        </NavLink>
      </ul>

      
        <div className='flex items-center gap-6'>
          <img onClick={() => setShowSearch(true)} src={assets.search_icon} alt="search-icon" className='w-5 cursor-pointer' />

          <div className='group relative'>
            <img src={assets.profile_icon} alt="profile icon" className='w-5 cursor-pointer' />
            <div className="group-hover:block hidden absolute dropdown-menu right-0 p-4">
              <div className="flex flex-col gap-2 w-16 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className='cursor-pointer hover:text-black'>My Profile</p>
                <p className='cursor-pointer hover:text-black'>Orders</p>
                <p className='cursor-pointer hover:text-black'>Logout</p>
              </div>
            </div>
          </div>
          <Link to='/cart' className='relative'>
            <img src={assets.cart_icon} alt="cart-icon" className='w-5 min-w-5' />
            <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
          </Link>
          <img onClick={() => setVisible(true)} src={assets.menu_icon} alt="menu-icon" className='w-5 cursor-pointer sm:hidden' />
        </div>

        {/* Small screen menu */}
        <div className={`fixed top-0 right-0 bottom-0 z-50 h-full overflow-hidden bg-white transition-all duration-300 ${visible ? 'w-full' : 'w-0'}`}>
          <div className="flex flex-col text-gray-600">
            <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
              <img src={assets.dropdown_icon} alt="dropdown-icon" className='h-4 rotate-180' />
              <p>Back</p>
            </div>

            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>Home</NavLink>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/collection'>Collection</NavLink>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about'>About</NavLink>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/contact'>Contact</NavLink>
          </div>
        </div>
    </div>
  )
}

export default Navbar