import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const RestaurantDetails = () => {
    const { restaurantId } = useParams();
    const [restaurantDetail, setRestaurantDetail] = useState(null);

    useEffect(() => {
        getRestaurantDetail()
    },[])

    const getRestaurantDetail = async () => {
        const dd = await fetch(`https://www.swiggy.com/dapi/menu/v4/full?lat=28.6992317&lng=77.0703152&menuId=${restaurantId}`);
        const restaurantdetails = await dd.json();
        setRestaurantDetail(restaurantdetails.data);
    }
    return (
        <div className="container">
            <h1 className="title">{restaurantDetail?.name}</h1>
            <p className="subtitle">{restaurantDetail?.city}, {restaurantDetail?.locality}</p>
            <div className="img">
                <img className="full-width" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + restaurantDetail?.cloudinaryImageId} alt="" />
            </div>
            <h2 className="title">Menu</h2>
            
            <ul className="pl-5">{
                restaurantDetail && 
                Object.values(restaurantDetail.menu.items).map((item) => <li key={item.id}>{item.name}</li>)
            }
            </ul>
            
        </div>
    )
    
}
export default RestaurantDetails