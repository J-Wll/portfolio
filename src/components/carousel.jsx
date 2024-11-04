export default function Carousel(props) {
    const colour = props.arrowColour || "black";
    function Images() {
        const carouselItems = []
        for (let i = 0; i < props.imgs.length; i++) {
            const classes = i === 0 ? "carousel-item active" : "carousel-item"
            carouselItems.push(<div key={i} className={classes}><img src={props.imgs[i]} className="d-block w-100" alt="..."></img></div>)
        }

        return <div className="carousel-inner">{carouselItems}</div>
    }

    return (
        <div id="carouselExample" className="carousel slide mt-3 mb-3">
            <div className="carousel-inner">
                <Images />
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className={`carousel-control-prev-icon ${colour}`} aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className={`carousel-control-next-icon ${colour}`} aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}