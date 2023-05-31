import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'


export const Header = () => {

  const [navi, setNavi] = useState(false)
  const handleclick = () => setNavi(!navi)

  return (
    <div className='w-full h-[100px] flex bg-black text-white justify-between items-center px-4'>
      <div>
        <NavLink to='/' className='text-xl'>Home</NavLink>
      </div>

      {/* menu */}

      <ul className='hidden md:flex justify-evenly'>

        <li className="relative group">

          <NavLink to='#' className='hover:bg-pink-500' >Category</NavLink>
          <ul className="absolute z-50 opacity-0 pointer-events-none transition duration-300 ease-in-out group-hover:opacity-100 group-hover:pointer-events-auto w-max bg-slate-600">
            <li> <NavLink to='/cate/1' className='hover:bg-pink-500'  >1</NavLink></li>
            <li> <NavLink to='/cate/2' className='hover:bg-pink-500' >2</NavLink></li>
            <li>  <NavLink to="/cate/3" className="hover:bg-pink-500">3</NavLink></li>
            <li><NavLink to="/cate/4" className='hover:bg-pink-500' >4</NavLink></li>
          </ul>
        </li>
        
        <li><NavLink to='/addProduct'>Add</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>

      </ul>





      {/* icons */}
      <div onClick={handleclick} className='md:hidden z-10'>
        {!navi ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul className={
        !navi
          ? 'hidden'
          : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
      }>
        <li className='py-2 text-[25px]'><NavLink onClick={handleclick} to='/'>Home</NavLink></li>



        <li className='py-2 text-[25px]'><NavLink onClick={handleclick} to=''>Latest</NavLink></li>
        <li className='py-2 text-[25px]'><NavLink onClick={handleclick} to=''>People</NavLink></li>




      </ul>
    </div>
  );
};

