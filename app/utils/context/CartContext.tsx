import { createContext, useContext, useReducer, ReactNode } from 'react';
import { CartAction, CartContextType, CartState, ProductProps } from '../interface/Interface';







const CartContext = createContext<CartContextType | undefined>(undefined);

const initialState: CartState = {
    cart: [],
  };

  const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
      case 'ADD_TO_CART': {
        const item = action.payload;
        const existingItemIndex = state.cart.findIndex(cartItem => cartItem.id === item.id);
        
        if (existingItemIndex >= 0) {
          const updatedCart = state.cart.map((cartItem, index) =>
            index === existingItemIndex ? { ...cartItem, quantity: cartItem.quantity + item.quantity } : cartItem
          );
          return { ...state, cart: updatedCart };
        }
        
        return { ...state, cart: [...state.cart, item] };
      }
      case 'REMOVE_FROM_CART': {
        const itemId = action.payload;
        const updatedCart = state.cart.filter(cartItem => cartItem.id !== itemId.id);
        return { ...state, cart: updatedCart };
      }
      case 'INCREMENT_QUANTITY': {
        const itemId = action.payload;
        const updatedCart = state.cart.map(cartItem => 
          cartItem.id === itemId.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
        return { ...state, cart: updatedCart };
      }
      case 'DECREMENT_QUANTITY': {
        const itemId = action.payload;
        const updatedCart = state.cart.map(cartItem =>
          cartItem.id === itemId.id && cartItem.quantity > 1
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
        return { ...state, cart: updatedCart };
      }
      default:
        return state;
    }
  };
  
  

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart: state.cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('Ensure useCart is used within a CartProvider');
  }
  return context;
};
