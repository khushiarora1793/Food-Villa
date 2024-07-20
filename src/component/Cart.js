import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import {removeItemlast} from "../utils/cartSlice"
import {removeItemfirst} from "../utils/cartSlice"
const Cart=()=>{
       
      const cartItems=useSelector((store)=> store.cart.items);
        const  dispatch=useDispatch();
      const handleClearCard=()=>{
         dispatch(clearCart());
      }
  const handleClearCardforlast=()=>{
        dispatch(removeItemlast());
  }
   const handleClearCardforfirst=()=>{
        dispatch(removeItemfirst());
   }
   const amount=()=>{
          
        const sum=cartItems.reduce(function (sum1, curr){
               //  console.log(curr);
                return sum1;
        }, 0)
     //    console.log(0);
        return sum;
   }
    return(
             
           <div className="m-4 p-4 ">
                  <div className=" w-6/12 m-auto"> 
                  <h1 className=" font-bold text-xl text-center my-2">Cart</h1>
                
                  <button className= " font-bold bg-black text-white p-2 rounded-md  mx-4 hover:bg-yellow-200 hover:text-black" onClick={handleClearCard}>
                  Clear Cart</button>
                  <button className= "  font-bold bg-black text-white p-2 rounded-md mx-4  hover:bg-yellow-200 hover:text-black" onClick={handleClearCardforlast}>
                  remove last item</button>
                  <button className= "  font-bold bg-black text-white p-2 rounded-md mx-4  hover:bg-yellow-200 hover:text-black" onClick={handleClearCardforfirst}>
                  remove first item</button>
                  {cartItems.length==0 && <h1 className=" m-6">cart is empty pls push your self to eat something</h1>}

                  <ItemList items={cartItems} />
                  </div>
                  
         </div>
    ) 
}
export default Cart;