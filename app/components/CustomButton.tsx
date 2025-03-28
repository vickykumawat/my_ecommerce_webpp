import React from 'react';
import { ButtonType } from '../utils/interface/Interface';



const CustomButton: React.FC<ButtonType> = ({children, btnCategory,style, handleClick}) => {
 
return(
  <button value={btnCategory} className={`btn_border ${style} hover:bg-[#F05A28]/[50%]`} onClick={handleClick} >
    {children}
  </button>
)
}

export default CustomButton