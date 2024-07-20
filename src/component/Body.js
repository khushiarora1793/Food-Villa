import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
//  import restaurant from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmar";
import { Link } from "react-router-dom";
 import useOnlineStatus from "../utils/useOnlineStatus"
const Body=()=>{
 const[listrestaurants, setrestaurants]=useState([]);
   const [searchText, setSearchText]=useState("");
   const[filteredRestaurant, setfilteredRestaurant]=useState([]);

     const RestaurantCardPromoted=withPromotedLabel(RestaurantCard);
      useEffect(()=>{
         featchdata();
    }, []);
       const featchdata= async ()=>{
            
            const data=await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
            const json= await data.json();
              //  console.log(json);
               setrestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
               setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            }

            if(useOnlineStatus()===false){
              return <h1>you'r offline pls check your connection</h1>;
          }
    return (filteredRestaurant.length===0) ? <Shimmer /> :(
        <div className="body">
               <div className="flex justify-center my-5"> 
                 <div className="">
                     <input type="text" className="  border border-solid border-black rounded-md"  value={searchText} 
                     onChange={(e)=>{setSearchText(e.target.value)}}
                          />
                      <button className="px-4 py-1 mx-2 rounded-md bg-black  text-white  hover:bg-yellow-600 hover:text-black" 
                      onClick={()=>{
                            //  console.log(listrestaurants);
                        const filteredRestaurant=listrestaurants.filter(
                          (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        )
                        setfilteredRestaurant(filteredRestaurant);
                      }}>Search</button>
                 </div>
                 <button className="px-5  rounded-md bg-black  text-white  hover:bg-yellow-600 hover:text-black" 
                 onClick={()=>{
                      const filterlist=filteredRestaurant.filter(
                        (res)=>res.info.avgRating>4.3
                      );
                      setfilteredRestaurant(filterlist);
                  }}>
                 Top rated Restaurant</button>
               </div>
               <div className="flex flex-wrap">
                       
                     {    
                      filteredRestaurant.map((restaurant)=>
                             
                      <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}> 
                           {
                               
                            (restaurant.info.veg)? ( <RestaurantCardPromoted resdata={restaurant}  />) : (<RestaurantCard  resdata={restaurant} />)
                           }
                       
                        </Link>)
                     }
                   
               </div>
        </div>
    );
};
export default Body;