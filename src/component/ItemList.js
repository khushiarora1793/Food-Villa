import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/Contants";
import { addItem } from "../utils/cartSlice";
import { useSelector } from "react-redux";
 import { useEffect } from "react";
const ItemList=({items})=>{

        const dispatch=useDispatch();
        const cartItem=useSelector((store)=>store.cart.items);
      
       const handleAddItem=(item)=>{
             dispatch(addItem(item)); 
       }
        const hendelfrequency=(item)=>{   
             const filter=cartItem.reduce(function (cnt, curr){
                if(curr.card.info.id===item.card.info.id){
                   cnt++;
                }
                return cnt;
            },0);
         return filter;
        }
           
    return (
         <div>
            {
                items.map((item)=>(
                    <div  key={item.card.info.id} className=" m-2 p-2 border-gray-200 border-b-2 text-left flex justify-between ">
                    {/* my-4 mx-3 p2  border-gray-300 border-b-2 text-left */}
                  <div  className="w-9/12">
                     <div className="py-2">
                         <div className="font-bold">{item.card.info.name}</div>
                         <div className=""> ₹. {item.card.info.price/100 || item.card.info.defultprice/100}</div>
                     </div>
                     <p className="text-xs">{item.card.info.description}</p>
                  </div>
                  <div className="w-3/12 p-4">
                      <div className="absolute">
                              <button className=" p-2 mx-1 rounded-lg bg-black text-white  shadow-lg hover:bg-yellow-200 hover:text-black" 
                             onClick={()=>handleAddItem(item)}>Add+ <span className=" text-blue-200">{hendelfrequency(item)}</span> </button>
                            
                            
                      </div>
                     <img src={CDN_URL+item?.card?.info?.imageId} className="w-20 h-20 my-3"/>
                  </div>
                  </div>
                ))
            } 
            
         </div>
    )
}
export default ItemList;