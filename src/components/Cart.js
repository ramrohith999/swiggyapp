import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{

const cartItems=useSelector((store)=> store.cart.items);

const dispatch=useDispatch();

const handleClearCart=()=>{
dispatch(clearCart());
}

return(
    <div className="text-center m-4 p-4">
<h1 className="text-2xl font-bold ">Cart</h1>
<div className="w-6/12 m-auto">

    <ItemList items={cartItems} />

    <button className="text-white p-2 m-2 bg-black cursor-pointer rounded-lg hover:opacity-80" 
onClick={handleClearCart}
>
    Clear Cart</button>
    { cartItems.length===0 && <h1 className="m-6 p-6 shadow-2xs font-serif text-2xl">Your cart is empty. Add items to the cart.</h1> }
</div>
    </div>
)
}

export default Cart;