import ItemList from "./ItemList";
 import { useState } from "react";
const RestaurantCategory=({ data, showItems, setshowindex })=>{
    
         const handleclick=()=>{
            setshowindex();
         }
         
      return (
           <div>
                <div className="mx-auto my-4 w-6/12 bg-slate-100 p-4 shadow-lg rounded-md ">
                   <div className="flex justify-between  cursor-pointer" onClick={handleclick}>
                   <span className="font-bold text-lg">{data.title} ({data.itemCards.length}) </span>
                    <span>🔽</span>
                   </div>
                {showItems && <ItemList items={data.itemCards}/>}
                </div>
           </div>
      )
}
export default RestaurantCategory;