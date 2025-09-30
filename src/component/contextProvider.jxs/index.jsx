import React, { useState } from "react";
import CartContext from "../../config/context/cartcontext";

export default function ContextProvider({children}){
    
        const [cartItem,setCartItem] = useState({items:[]})
        
        let qnty;

        const add_to_cart = (val) =>{
            let qnty;

            let cart_books= cartItem.items.filter((book) => book.name!=val.name)


            setCartItem( {
                
                ...cartItem,
                items : [...cart_books,{...val,qnty:1}],
                
                
            });
        }

      console.log(cartItem);
      const number = cartItem.items.length;

      

    return(
        <>
        <CartContext.Provider value={{cartItem,setCartItem,add_to_cart,number}}>
            {children}
        </CartContext.Provider>
        </>
    )
}