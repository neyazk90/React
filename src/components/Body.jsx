import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { restaurantList } from "../../config"
import RestaurantCard from "./RestaurantCard"
import useGeoLocation from "./shared/hooks/useGeolocation";
import Shimmer from "./shared/Shimmer";

function searchItem(searchText, restaurants) {
    const data = restaurants.filter((restaurant) => 
        restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return data;
}

const Body = () => {
    const [searchText, setSearchText] = useState('');
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filterRestaurant, setfilterRestaurant] = useState([]);
    const { latitude, longititude} = useGeoLocation() // custom hooks
 

    const searchHandler = () => {
        const filteredData = searchItem(searchText, allRestaurants);
        setfilterRestaurant(filteredData)
    }
    useEffect(() => {
        if (latitude && longititude) {
            getRestaurant();
        }
    }, [latitude, longititude])

    const getRestaurant = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longititude}&page_type=DESKTOP_WEB_LISTING`);
        const json = await data.json()
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setfilterRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    }

    return allRestaurants.length == 0 ? (
        <Shimmer/>
    ) : (
        <>
            <div className="container">
                <div className="form-group input-group mb-10">
                    <input type="text" className="form-control" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                    <button className="btn btn--search" onClick={searchHandler}>Find</button>
                </div>
                <div className="d-flex flex-wrap flex-around">
                    {/* <RestaurantCard cloudinaryImageId={restaurantList[0].data.cloudinaryImageId}
                    name={restaurantList[0].data.name}
                    cuisines={restaurantList[0].data.cuisines}
                    minDeliveryTime={restaurantList[0].data.minDeliveryTime}
                /> */}
                    {
                        filterRestaurant.length == 0 && <h1>No Restaurant Found!</h1>
                    }

                    { filterRestaurant.length > 0 &&
                            filterRestaurant.map((restaurant) => (
                                <Link className="card" to={'restaurant/'+restaurant.data.id } key={restaurant.data.id}>
                                    <RestaurantCard {...restaurant.data}  />
                            </Link>
                        ))
                    }

                    {/* <RestaurantCard {...restaurantList[0].data} />
                <RestaurantCard {...restaurantList[1].data} />
                <RestaurantCard {...restaurantList[2].data} /> */}

                    {/* <RestaurantCard restaurant={restaurantList[1].data}/>
                <RestaurantCard restaurant={restaurantList[2].data}/>
                <RestaurantCard restaurant={restaurantList[3].data} />
                <RestaurantCard restaurant={restaurantList[4].data} />
                <RestaurantCard restaurant={restaurantList[5].data} /> */}
                </div>
            </div>
        </>
    )
}
export default Body