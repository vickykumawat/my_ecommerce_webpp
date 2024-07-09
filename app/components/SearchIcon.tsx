import React from 'react'
import Image from 'next/image';
import search_icon from '../../public/search_icon.svg';
import { searchIconProps } from '../utils/interface/Interface';


const SearchIcon = ({styling}: searchIconProps) => {
  return (
    <div className={`${styling}`}>
      <input 
      placeholder='Search..'
      className='bg-transparent px-1 border-transparent'
      />
      <button type='submit' className='md: w-[30px]'>
      <Image src={search_icon} className=" " alt="search-icon" quality={100}/>
      </button>
  </div>
  )
}

export default SearchIcon