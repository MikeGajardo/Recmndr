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
import Question3 from "./views/Question3";
import Question4 from "./views/Question4";
import Question5 from "./views/Question5";
import Question6 from "./views/Question6";
import Question7 from "./views/Question7";
import Question8 from "./views/Question8";
import Question9 from "./views/Question9";
import Question10 from "./views/Question10";

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
						<Route exact path="/create-your-profile/q3">
							<Question3 />
						</Route>
						<Route exact path="/create-your-profile/q4">
							<Question4 />
						</Route>
						<Route exact path="/create-your-profile/q5">
							<Question5 />
						</Route>
						<Route exact path="/create-your-profile/q6">
							<Question6 />
						</Route>
						<Route exact path="/create-your-profile/q7">
							<Question7 />
						</Route>
						<Route exact path="/create-your-profile/q8">
							<Question8 />
						</Route>
						<Route exact path="/create-your-profile/q9">
							<Question9 />
						</Route>
						<Route exact path="/create-your-profile/q10">
							<Question10 />
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
