import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import Homepage from "./views/Homepage";
import Question from "./views/Question";
import Result from "./views/Result";
import Tiers from "./views/Tiers";
import injectContext from "./store/appContext";
import Question1 from "./views/Question1";
import Question2 from "./views/Question2";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Homepage />
						</Route>
						<Route exact path="/create-your-profile">
							<Question />
						</Route>
						<Route exact path="/create-your-profile/q1">
							<Question1 />
						</Route>
						<Route exact path="/create-your-profile/q2">
							<Question2 />
						</Route>
						<Route exact path="/my-profile">
							<Result />
						</Route>
						<Route exact path="/subscribe">
							<Tiers />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
