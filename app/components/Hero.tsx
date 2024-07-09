import React from 'react'
import Navbar from './Navbar';
import Image from 'next/image';
import CustomButton from './CustomButton';
import SearchIcon from './SearchIcon';

type Props = {}

function Hero({}: Props) {
  return (
    <section className='hero_grid bg-home-bg bg-no-repeat bg-cover  bg-center text-white' >
      <Navbar/>
      <div className='hero_content '>
        <SearchIcon styling="max-w-[80%] rounded-xl border border-yellow-500 search_flex  px-3 md:hidden"/>

        <div className='text-2xl max-w-[60%] md:text-4xl lg:text-5xl lg:font-bold  md:max-w-[50%] lg:max-w-[50%] lg:py-7 xl:text-7xl xl:min-w-[200px] mx-auto text-center '>
          <h1 className=''>Your one stop Mini Online store</h1>
        </div>
        <div className='mx-auto text-xs  max-w-[80%] md:max-w-[50%] lg:max-w-[50%] lg:text-lg  font-thin text-center '>
          <p>Explore your unique favorite for every occasion,
            all conveniently delivered right to your doorstep
          </p>
        </div>

        <div className='mt-[25px]  my_flex font-semibold'>
          <CustomButton style='px-8 py-2 text-[17px] rounded-xl btn_color' > Shop now</CustomButton>
        </div>
      </div>
     
      

    </section>
  

  )
}

export default Hero