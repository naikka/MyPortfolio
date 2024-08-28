import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';


const Navbar = () => {
    const [nav, setNav] = useState(false)
  const handleNav = () => {
setNav(!nav)
  }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-8 text-white'>
      <h1 className='pt-22 text-2xl font-bold text-[#F7EED3]'>WELCOME</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>HOME</li>
        <li className='p-4'>ABOUT</li>
        <li className='p-4'>CONTACT</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}/>}
        
      </div>
      <div className={!nav ? 'fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-[#F7EED3] ease-in-out duration-500' : 'fixed left-[-100%]'}>
      <h1 className='text-3xl font-bold text-[#AAB396] m-6'>Happy Reading!</h1>
      <ul className='uppercase text-black'>
        <li className='p-4 border-b border-gray-600'>HOME</li>
        <li className='p-4 border-b border-gray-600'>ABOUT</li>
        <li className='p-4'>CONTACT</li>
      </ul>
      </div>
    </div>
  );
}

export default Navbar;
