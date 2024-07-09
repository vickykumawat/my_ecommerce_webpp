import React from 'react';
import cart_logo from "../../public/cart_icon.svg";
import account_logo from "../../public/account_icon.svg";
import hamburger from "../../public/hamburger.svg";
import brand_logo from "../../public/logo.svg";
import Image from 'next/image';
import SearchIcon from './SearchIcon';



type Props = {}

function Navbar({}: Props) {
  return (
    <nav className='p-1  md:p-3 lg:p-5'>
      <div  className='min-w-full p-3 nav_holder'>
        <div className=' my_flex px-3 logo_band xl:font-lg'>
          <div><Image src={brand_logo} alt='cart-icon'  className='md:w-[25px] lg:w-[30px] brand_logo'/></div>
          <p className='text-white'>UrbanNest</p>
        </div>

        <div className='my_flex gap-[20px]  p-3 icon_holder'>
          <div >
            <Image src={cart_logo} alt='cart-icon' className='md: w-[25px] lg:w-[30px]' />
          </div>
          <div><Image src={account_logo}  alt='account-icon' className='md:w-[25px] lg:w-[30px]' /></div>
          <div><Image src={hamburger}  alt='hamburger' className='block md:hidden'/></div>
        </div>
        <div className='ext_search_icon_'>
          <div className='ext_search_icon_box'>
            <div className='ext_link_holder  lg:text-[10px] xl:text-sm'>
              <a href="" className=''> Home </a>
              <a> Newitems </a>
              <a> Household </a>
              <a> Gadgets </a>
              <a> Fruits </a>
            </div>
            <SearchIcon styling='flex p-1 rounded-2xl border border-red-500'/>
          </div>
          
        </div>
      </div>
  </nav>
  )
}

export default Navbar