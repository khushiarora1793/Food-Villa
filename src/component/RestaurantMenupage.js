// import { useEffect, useState } from "react";
import Shimmer from "./Shimmar";
 import { useParams } from "react-router-dom";
 import useRestaurantMenu from "../utils/useRestaurantMenu";
 import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
 const RestaurantMenupage=()=>{
       const [showindex, setshowindex]=useState(0);
    const {resId}=useParams();
     const resInfo=useRestaurantMenu(resId);

       if(resInfo==null){
          return <Shimmer />;
       }
        console.log(resInfo);
   //  const {name, cuisines, costForTwo}=resInfo?.data?.cards[0]?.card?.card?.info;
   const {name, cuisines, costForTwo}=resInfo?.data?.cards[2]?.card?.card?.info;
   //   const {itemCards}=resInfo?.data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
     const {itemCards}=resInfo?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
     
        const categories=
        resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>
             c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )

    return(
        <div className="text-center ">
           <h1 className="font-bold my-4 py-4 text-2xl">{name}</h1>
           <p className="text-lg">{cuisines.join(", ")}</p>
           {
            categories.map((category,index)=>{
            return <RestaurantCategory key={category?.card?.card.title} data={category?.card?.card} 
               showItems={showindex==index && true} 
               setshowindex={ () => setshowindex(index)}
             />
            })
           }
        </div>
    )
  }
  export default RestaurantMenupage;