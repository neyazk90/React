import { useEffect, useState } from "react";
import useGeoLocation from "./useGeolocation";

export const useFetchRestaurant = (resID) => {
    const [restaurantDetail, setRestaurantDetail] = useState(null);
    const { latitude, longititude } = useGeoLocation() // custom hooks


    useEffect(() => {
        if(latitude && longititude)
            getRestaurantDetail()
    }, [latitude, longititude])

    const getRestaurantDetail = async () => {
        const dd = await fetch(`https://www.swiggy.com/dapi/menu/v4/full?lat=${latitude}&lng=${longititude}&menuId=${resID}`);
        const restaurantdetails = await dd.json();
        setRestaurantDetail(restaurantdetails.data);
    }
   
    if (restaurantDetail) {
        return restaurantDetail;
    }
}
