import React from 'react';

const Carousel = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide mb-4" data-bs-ride="carousel" style={{"maxHeight" : "600px"}} >
            <div className="carousel-inner" style={{"maxHeight" : "600px"}} >
                <div className="carousel-item active">
                    <img style={{objectFit:"fill !important"}} src="https://images.unsplash.com/photo-1627840009553-ff79a10c9ddd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=700&ixid=MnwxfDB8MXxyYW5kb218MHx8YnJvYXN0fHx8fHx8MTcwOTI3ODg1MQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=900" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img style={{objectFit:"fill !important"}} src="https://images.unsplash.com/photo-1630855627649-3930313260bf?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=700&ixid=MnwxfDB8MXxyYW5kb218MHx8YnVyZ2VyfHx8fHx8MTcwOTI3OTE4Mw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=900" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img style={{objectFit:"fill !important"}} src="https://images.unsplash.com/photo-1512152272829-e3139592d56f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=700&ixid=MnwxfDB8MXxyYW5kb218MHx8YmlyeWFuaXx8fHx8fDE3MDkyNzkzMTE&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=900" className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel;