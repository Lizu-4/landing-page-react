
import React from "react";

// import rigoImage from "../../img/rigo-baby.jpg";

const Card = () => {
	return (
        <div className="col-12 col-md-3">
            <div className="card text-center">
            <img src="https://picsum.photos/200/200" className="card-img-top w-100"/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
        </div>
      
	);
};


export default Card;