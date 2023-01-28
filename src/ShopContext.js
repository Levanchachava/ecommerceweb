import React, { createContext, useState, useEffect } from 'react'

export const ShopContexts = createContext(null)

function ShopContextProvider(props) {
    const[CartProduct, setCartproduct] = useState([])
    useEffect(() =>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>setCartproduct(data))
    }, [])
   
    const getDefaultCart = () => {
        let cart = {};
        for (let i = 1; i < 22; i++) {
          cart[i] = 0;
        }
        return cart;
    };
    const[Cartitem, setCartItems] = useState(getDefaultCart())
    
    const getTotalCartAmount = () => {
        let totalAmount = 0;
            for (const item in Cartitem) {
                if (Cartitem[item] > 0) {
                let itemInfo = CartProduct.find((product) => product.id === Number(item));
                totalAmount += Cartitem[item] * itemInfo.price;
            }
        }
        return totalAmount;
    };


    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount }))
    }
    
    const addtocart = (itemId) =>{
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    console.log(Cartitem)
    const removetocart = (itemID) =>{
        setCartItems((prev) => ({...prev, [itemID]: prev[itemID]-1 }))
    }

    const ContextValue = {Cartitem, addtocart, removetocart, updateCartItemCount, getTotalCartAmount}

    

  return (<ShopContexts.Provider value={ContextValue}>{props.children}</ShopContexts.Provider>)
  
}

export default ShopContextProvider