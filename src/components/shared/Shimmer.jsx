

const Shimmer = () => {
    return (
        <>
            <div className="d-flex container flex-wrap flex-around shimmer">
            {Array(10).fill('').map((item,index) =>
                <div className="card" key={index}>
                    <div className="card__rating">

                    </div>
                    <div className="card__img__thumbnail">
                        {/* <img className="card__image" src={} /> */}
                    </div>
                    <div className="card__info">
                        <div className="card__title"></div>
                        <div className="card__cuisines"></div>
                        <div className="card__lastmile"></div>
                    </div>
                </div>
                )}
            </div>
        </>
    )
}
export default Shimmer