
import { deleteCart, removeFromCart } from "../commonActFeas/cartCommon"



export const delteItemFromCartAction = (payload)=>{
    return (dispatch,state)=>{
        dispatch(removeFromCart(payload));
        updateLocalStorage(state);
    }
}

const updateLocalStorage = (state)=>{
    const {cartState} = state();
    localStorage.setItem('cart',JSON.stringify(cartState?.cart))
}

export const clearCart = ()=>{
    return (dispatch,state) =>{
       dispatch(deleteCart());
       localStorage.removeItem('cart');
    }
}