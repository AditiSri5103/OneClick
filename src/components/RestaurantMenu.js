import { useParams } from "react-router-dom"
import {useState , useEffect} from "react"
import {image_url} from "./constants"
import Shimmer from "./Shimmer"
const RestaurantMenu=()=>{
    const {id}= useParams()
    
    const [restaurant,setRestaurant]=useState(null)
    const [items,setItems]=useState()

    useEffect(()=>{
        getRestaurantDetail();
    },[])

    async function getRestaurantDetail(){
        try{
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.449923&lng=80.3318736&restaurantId="+id+"&catalog_qa=undefined&submitAction=ENTER")
        const json= await data.json()
        // console.log(json)
        // console.log(json.data)
        setRestaurant(json?.data?.cards[0]?.card?.card?.info)
        setItems(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards
            ?.map((x) => x.card?.card)
        ?.filter(
          (x) =>
            x["@type"] ==
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        ));
        
        // console.log("items")
        // console.log(items)
    }
        catch (error) {
            console.error("An error occurred while fetching data:", error);
        }
    }
return !restaurant ? (<Shimmer/>):(
    <div>
        <h2>{restaurant?.name}</h2>
        <img src={image_url+restaurant?.cloudinaryImageId}></img>
        <p>{restaurant?.locality}</p>
        <p>{restaurant?.areaName}, {restaurant?.sla?.lastMileTravelString}</p>
        <hr></hr>
        <h2>Menu Items</h2>
        <div>
        <ul>
        {Object.values(items).map((item) => {
        //  console.log("Item: ", item); // Debugging line
         return <li key={item.id}>{item.itemCards[0].card.info.name}</li>;
         })}
</ul>
        </div>
        
        {/* {console.log(Object.values(items))} */}
        <p></p>
    </div>
)
}
export default RestaurantMenu;
        // <ul>
        //     {
        //     Object.values(items).map((item)=>{
        //         // {console.log("it: "+item?.card?.card?.itemCards[0]?.card?.info?.name)}
        //         // <li>{item?.card?.card?.itemCards[0]?.card?.info?.name}</li>
        //         <li key={item.id} >{item.itemCards[0].card.info.name}</li>
        //         {console.log(item.itemCards[0].card.info.name)}
        //     })}
        // </ul>