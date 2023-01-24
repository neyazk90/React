const RestaurantCard = ({ cloudinaryImageId, name, cuisines, minDeliveryTime, avgRating }) => {
    
    return (
        <>
            <div className="card__rating">
                {avgRating}
            </div>
            <div className="card__img__thumbnail">
                <img className="card__image" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} />
            </div>
            <div className="card__info">
                <div className="card__title">{name}</div>
                <div className="card__cuisines">{cuisines.join(', ')}</div>
                <div className="card__lastmile">Min. Delivery Time: <span> {minDeliveryTime}</span></div>
            </div>
        </>
    )
}

export default RestaurantCard