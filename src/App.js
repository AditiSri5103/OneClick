import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"//default import
import Body from "./components/Body"
import Footer from "./components/Footer"
import About from "./components/About";
import Error from "./components/Error";
import { Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import {Header} from "./components/Header" //named import


/**
 * APP Layout
 * Header=>
 *      -Logo(LHS)
 *      -List(RHS)
 * Body=>
 *      Search
 *      Restaurant Card=>
 *          -Image
 *          -Name
 *          -Cuisine
 *          -Rating
 * Footer=>
 *          -Info
 * 
 */




const AppLayout=()=>{
    return(
        <div>
            <Header />
            <Outlet />
            
            <Footer/>
        </div>
    )
}

const router=createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[        
    {
        path:'/',
        element:<Body/>
    },
    {
        path:'/about',
        element:<About/>
    },
    {
        path:'/restaurant/:id',
        element:<RestaurantMenu/>
    }
]}]
)  


// const Test=()=>{
//     return (
//         <div>
//         {console.log("Hello")}
//         <h3>Hello guys</h3>
//         </div>
//     )
// }

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>)
