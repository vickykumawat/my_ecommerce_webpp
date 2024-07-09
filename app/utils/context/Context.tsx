"use client";
import React, { createContext, useContext, useEffect, useState} from 'react'
import productsData from "../../utils/lib/all_products.json";
import { CategoryProps, productContextProps } from '../interface/Interface';

const productContext = createContext<productContextProps  | undefined>(undefined);

export const ProductsProvider: React.FC<{children: React.ReactNode}> = ({children}) =>{
    const [categories, setCategories] = useState<CategoryProps[]>([]);

    useEffect(()=>{
        setCategories(productsData.categories)
    },[]);

    const getCategory = (categoryName: string) =>{
        return categories.find(category => category.category === categoryName);
    }

    return(
        <productContext.Provider value={{categories, getCategory}}>
            {children}
        </productContext.Provider>
    )
};

export const useProducts = () => {
    const context = useContext(productContext);
    if (!context) {
      throw new Error('useProducts must be used within a ProductsProvider');
    }
    return context;
  };


