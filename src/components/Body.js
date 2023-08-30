import React, { useEffect,useState } from "react";
// import { restaurant } from "./constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa"



function filterRest(searchText,RestaurantList){
    return RestaurantList.filter((rest)=> 
    rest?.info?.name?.toLowerCase().includes(searchText.toLowerCase()))
}



const Body = () => {
    const [searchText,setsearchText]=useState("");
    const [RestaurantList,setRestaurantList]=useState([]);
    const [FilteredRestaurantList,setFilteredRestaurantList]=useState([]);
    // return(
        //         <RestaurantCard rest={restaurant[0]}/>
        //         <RestaurantCard rest={restaurant[1]}/>
        //         <RestaurantCard rest={restaurant[2]}/>
        //         <RestaurantCard rest={restaurant[3]}/>
        //         <RestaurantCard rest={restaurant[4]}/>
        //         <RestaurantCard rest={restaurant[5]}/>

        useEffect(()=>{
            // console.log("search text is changed")
            fetchList();
        },[]);

        async function fetchList(){
            try {
                const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING");
                const json = await data.json();
                console.log(json)
                setRestaurantList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
                setFilteredRestaurantList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

            } 
            catch (error) {
                console.error("An error occurred while fetching data:", error);
            }
        }
               
        console.log("render")
        if(!RestaurantList) return null;

        return(RestaurantList.length===0)?<Shimmer/>: (
        <div className="body-container">
        <div className="search-container">
            <div>
             <FaSearch />
            <input type="text" value={searchText} placeholder="Enter something to search" onChange={(e)=>{
                
                setsearchText(e.target.value)
              
            }}>
            
            </input>
            </div>
            <button className="search-btn" onClick={()=>{
                const list = filterRest(searchText,RestaurantList);
                setFilteredRestaurantList(list)
            }}>
                Search
                </button>
            
        </div>
        <h2>Searching for {searchText} !!</h2>
        <div className="restaurant-list">
            {FilteredRestaurantList?.length === 0 ? (
             <h1>No Restaurants Found</h1>
            ) : (
            FilteredRestaurantList.map((rest) => {
            console.log(rest);
            return( <div key={rest.info.id} className="main-pg-list"><Link to={"/restaurant/"+rest.info.id} 
            >
                <RestaurantCard {...rest.info}  />
                </Link></div>);

    })
  )}
</div>
        </div>
    )
}
export default Body;