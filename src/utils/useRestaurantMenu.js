import { useEffect, useState } from "react";
import {MENU_API} from "./Contants";
const useRestaurantMenu=(resId)=>{
       const [resinfo , setResInfo]=useState(null);
           useEffect(()=>{
                 featchdata();
           }, []);
           const featchdata= async()=>{
            
                 const data= await fetch(MENU_API+resId);
                 const json= await data.json();
            //      console.log(json);
                 setResInfo(json);
           }
    return resinfo;
}
export default useRestaurantMenu;