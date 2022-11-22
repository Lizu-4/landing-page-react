import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";


//create your first component
const Home = () => {
	return (
		<>
		
		<Navbar/>
		<div className="container m-3 mx-auto">
			<Jumbotron/>
			<div className="row">
				{[1,2,3,4].map((item, index) => {
					return(
						<Card/>
					);
				})}
			</div>
		</div>
		<Footer/>
		</>

	);
};

export default Home;
