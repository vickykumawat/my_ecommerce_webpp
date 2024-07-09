import React from 'react';
import { ButtonType } from '../utils/interface/Interface';



const CustomButton: React.FC<ButtonType> = ({children, btnCategory,style, handle_click}) => {
return(
  <button value={btnCategory} className={`btn_border ${style} onhover:bg-black`} onClick={handle_click} >
    {children}
  </button>
)
}

export default CustomButton