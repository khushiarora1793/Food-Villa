  import  {CDN_URL}  from "../utils/Contants";
     const RestaurantCard=(props)=>{
        const {resdata}=props;
        const {name, cuisines, avgRating, costForTwo, deliveryTime}=resdata.info;
        return (
            <div className="m-4 p-4 w-[220px]  bg-slate-100 rounded-md mx-6   h-[430px] hover:bg-slate-300  shadow-lg  hover:scale-110 hover:transition duration-300 ease-in-out" >
                 <img className=" rounded-md h-[180px] w-[180px] " src={CDN_URL +resdata.info.cloudinaryImageId} /> 
                <h3 className="font-bold py-2  text-lg  hover:text-blue-800 text-center">{name}</h3>
                <h4 className=" text-center mb-2">{cuisines.join(", ")}</h4>
                <h5 className="text-center mb-1">Avgrating: {avgRating} ⭐</h5>
                <h5 className="text-center mb-1">{costForTwo}</h5>
                <h5 className="text-center">{deliveryTime}</h5>
            </div>
        )
        }


        //high order component
        export  const withPromotedLabel=(RestaurantCard)=>{
            return (props)=>{
                  return (
                      <div>
                          <label className=" absolute bg-black px-2 py-1 text-white rounded-md">Veg</label>
                          <RestaurantCard { ...props } />
                      </div>
                  )
            }
        }
        export default RestaurantCard;
 