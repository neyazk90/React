import { restaurantList } from "../../config"
import RestaurantCard from "./RestaurantCard"

const Body = () => {
    return (
        <>
            <div className="d-flex flex-wrap flex-around">
                {/* <RestaurantCard cloudinaryImageId={restaurantList[0].data.cloudinaryImageId}
                    name={restaurantList[0].data.name}
                    cuisines={restaurantList[0].data.cuisines}
                    minDeliveryTime={restaurantList[0].data.minDeliveryTime}
                /> */}

                {
                    restaurantList.map((restaurant) => (
                        <RestaurantCard {...restaurant.data} />
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

        </>
    )
}

export default Body