import { useEffect, useState } from "react";

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
};
function error() {
    alert('location not be able to fetch')
}


const useGeoLocation = ()=>{
    const [latitude, setLatitude] = useState(null)
    const [longititude, setLongititude] = useState(null)

    function success(position) {
        // console.log('position - in hooks', position);
        setLatitude(position.coords.latitude);
        setLongititude(position.coords.longitude);
    }
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.permissions.query({ name: "geolocation" })
                .then((result) => {
                    if (result.state === "granted") {
                        navigator.geolocation.getCurrentPosition(success, error);
                    } else if (result.state === "prompt") {
                        navigator.geolocation.getCurrentPosition(success, error, options);
                    } else if (result.state === "denied") {
                        //If denied then you have to show instructions to enable location
                    }
                    result.onchange = function () {
                        console.log(result.state);
                    };
                })
        }
        else {
            alert('position not available');
        }
    }, []);

    return {
        latitude: latitude,
        longititude: longititude
    }
}

export default useGeoLocation