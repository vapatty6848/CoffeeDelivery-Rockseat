import { ReactNode, createContext, useEffect, useState } from "react";
import { Coffee } from "../pages/Home/components/CoffeeCard";
import { produce } from 'immer';

export interface CartItem extends Coffee {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  cartQuantity: number;
  cartItemsTotal: number;
  cleanCart: () => void;
  addCoffeeCart: (coffee: CartItem) => void;
  changeCartItemQuantity: (cartItemId: number, type: 'increase' | 'decrease') => void;
  removeCartItem: (cartItemId: number) => void;
}


export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

const COFFEE_ITEMS_STORAGE_KEY = "coffeeDelivery:cartItems";

export function CartContextProvider( {children}:  CartContextProviderProps) {

  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storageCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY)
    if (storageCartItems) {
      return JSON.parse(storageCartItems);
    }
    return [];
  });

  const cartQuantity = cartItems.length;

  const cartItemsTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity;
  }, 0);

  function addCoffeeCart(coffee: CartItem) {
    const coffeeAlreadyExistInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id
    );

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistInCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeAlreadyExistInCart].quantity += coffee.quantity
      }
    });
    setCartItems(newCart);

  }
  console.log(cartItems);

  function changeCartItemQuantity(
    cartItemId: number,
    type: 'increase' | 'decrease'
  ) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistInCart = cartItems.findIndex(
       (cartItem) =>  cartItem.id === cartItemId
      );
      if (coffeeExistInCart >= 0) {
        const item = draft[coffeeExistInCart];
        draft[coffeeExistInCart].quantity =
          type === 'increase' ? item.quantity + 1 : item.quantity - 1;
      }
    })
    setCartItems(newCart);
  }
  function removeCartItem(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      );
      if (coffeeExistInCart >= 0) {
        draft.splice(coffeeExistInCart, 1)
      }
    })
    setCartItems(newCart)
  }

  function cleanCart() {
    setCartItems([])
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems])

  return (
    <CartContext.Provider value={({
      cartItems,
      cleanCart,
      cartQuantity,
      addCoffeeCart,
      cartItemsTotal,
      changeCartItemQuantity,
      removeCartItem,
    })}>
     {children}
    </CartContext.Provider>
  )
}
