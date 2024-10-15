import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const { token, setToken, userData } = useContext(AppContext);

  const logout = () => {
    localStorage.removeItem('token');
    setToken(false);
    navigate('/login');
  };

  return (
    <header className='bg-white shadow-md'>
      <nav className='flex items-center justify-between p-4 md:px-10'>
        {/* Logo */}
        <img
          onClick={() => navigate('/')}
          className='w-44 cursor-pointer'
          src={assets.logo}
          alt="MedConnect Logo"
        />
        
        {/* Desktop Menu */}
        <div className='hidden md:flex items-center gap-6'>
          <NavLink to='/' className='nav-link'>Home</NavLink>
          <NavLink to='/consult-doctor' className='nav-link'>Consult a Doctor</NavLink>
          <NavLink to='/about' className='nav-link'>About Us</NavLink>
          <NavLink to='/beds' className='nav-link'>Book a Bed</NavLink>
          <NavLink to='/contact' className='nav-link'>Contact Us</NavLink>
        </div>

        {/* User Actions */}
        <div className='flex items-center gap-4'>
          {token && userData ? (
            <div className='relative'>
              <img
                className='w-8 h-8 rounded-full cursor-pointer'
                src={userData.image}
                alt="User Avatar"
              />
              <div className='absolute right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg hidden group-hover:block'>
                <div className='flex flex-col p-4'>
                  <NavLink to='/my-profile' className='py-2 px-4 hover:bg-gray-100'>My Profile</NavLink>
                  <NavLink to='/my-appointments' className='py-2 px-4 hover:bg-gray-100'>My Appointments</NavLink>
                  <button onClick={logout} className='py-2 px-4 hover:bg-gray-100 w-full text-left'>Logout</button>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className='bg-blue-500 text-white px-4 py-2 rounded-full hidden md:block'
            >
              Sign In
            </button>
          )}
          
          {/* Mobile Menu Icon */}
          <img
            onClick={() => setShowMenu(!showMenu)}
            className='w-6 md:hidden cursor-pointer'
            src={assets.menu_icon}
            alt="Menu Icon"
          />
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-3/4 bg-white shadow-lg transition-transform ${
          showMenu ? 'transform translate-x-0' : 'transform translate-x-full'
        }`}
      >
        <div className='flex justify-between items-center p-4 border-b'>
          <img
            onClick={() => navigate('/')}
            className='w-36'
            src={assets.logo}
            alt="MedConnect Logo"
          />
          <img
            onClick={() => setShowMenu(false)}
            className='w-7 cursor-pointer'
            src={assets.cross_icon}
            alt="Close Menu"
          />
        </div>
        <ul className='flex flex-col items-center mt-4'>
          <NavLink onClick={() => setShowMenu(false)} to='/' className='nav-link-mobile'>Home</NavLink>
          <NavLink onClick={() => setShowMenu(false)} to='/doctors' className='nav-link-mobile'>Consult a Doctor</NavLink>
          <NavLink onClick={() => setShowMenu(false)} to='/beds' className='nav-link-mobile'>Book a Bed</NavLink>
          <NavLink onClick={() => setShowMenu(false)} to='/about' className='nav-link-mobile'>About Us</NavLink>
          <NavLink onClick={() => setShowMenu(false)} to='/contact' className='nav-link-mobile'>Contact Us</NavLink>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
