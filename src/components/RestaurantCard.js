import { image_url } from "./constants";
const RestaurantCard=({cloudinaryImageId,name,cuisines,avgRating}) => {
    return(
        <div className="card">
            {/* {console.log(props)}        */}
            
            <img src={image_url+cloudinaryImageId}/>
            <div className="card-info">
            <div>{name}</div>
            <div>{avgRating} ⭐</div>
            <div>{cuisines.join(", ")}</div>
            </div>
        </div>
    )
    }

export default RestaurantCard;