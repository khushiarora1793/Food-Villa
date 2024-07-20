import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import { createBrowserRouter,RouterProvider, Outlet } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import RestaurantMenupage from "./component/RestaurantMenupage";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./component/Cart";

const Applayout=()=>{
    return (
      <Provider store={appStore}> 
      <div className="app"> 
      <Header />
      <Outlet />
      </div>
    </Provider>
   
    );
    };

const approuter=createBrowserRouter([
   {
      path:'/',
      element:<Applayout />,
      children:[
         {
            path:'/',
            element:<Body/>
         },
         {
            path:'/about',
            element:<About />
         },
         {
            path:'/contact',
            element:<Contact />
         },
         {
            path:'/restaurants/:resId',
            element:<RestaurantMenupage />
         },
         {
            path:'/cart',
            element:<Cart/>
         }
      ],
      errorElement:<Error />
   },
    
])

 const root=ReactDOM.createRoot(document.getElementById("root"));
 root.render(<RouterProvider router={approuter} />);
