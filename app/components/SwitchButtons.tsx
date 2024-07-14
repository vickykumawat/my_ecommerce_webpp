import React, { Dispatch, SetStateAction } from 'react'
import CustomButton from './CustomButton'
import switch_left from '../../public/switch_left.svg'
import switch_right from '../../public/switch_right.svg'
import Image from 'next/image'

type pageProps = {
    setPage: Dispatch<SetStateAction<number>>,
    page: number
}

const SwitchButtons = ({setPage,page}:pageProps) => {
  return (
    <div className='btm_btns flex justify-between items-center text-[#F05A28]'>
       <button className='p-2 '> 
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6" onClick={()=> setPage(page > 1 ? page - 1 : 1 ) }>
                <path fill-rule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
               </svg>

       </button>
       <button className='p-2  ' > 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6" onClick={()=> setPage( page < 5 ? page + 1 : 1 ) }>
               <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
            </svg>

       </button>
    </div>
  )
}

export default SwitchButtons