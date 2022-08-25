import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthContexProvider } from "../Context/AuthContext";
import ScrollToTop from "./component/scrollToTop";
import Musicfile from "./component/MusicFile"
import Homepage from "./views/Homepage";
import Result from "./views/Result";
import injectContext from "./store/appContext";
import Questionnaire from "./views/Questionnnaire";
import Login from "./views/Login";
import Paywall from "./views/Paywall";
import Services from "./component/Services";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Signup from "./views/Signup";

// dashboard profiles
import Dbmellow from "./views/Dbmellow";
import Dbunpretentious from "./views/Dbunpretentious";
import Dbsophisticated from "./views/Dbsophisticated";
import Dbintense from "./views/Dbintense";
import Dbcontemporary from "./views/Dbcontemporary";
import Aboutus from "./views/Aboutus";
import Feedback from "./views/Feedback";
import ProtectedRouter from "./component/ProtectedRouter";

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
					<AuthContexProvider>
					<Switch>
						<Route exact path="/Musicfile">
							<Musicfile />
						</Route>
						<Route exact path="/">
							<Homepage />
						</Route>
						<Route exact path="/create-your-profile">
							<ProtectedRouter>
							<Questionnaire />
							</ProtectedRouter>
						</Route>
						<Route exact path="/my-profile">
							<Result />
						</Route>
						<Route exact path="/my-profile/mellow">
							<Dbmellow />
						</Route>
						<Route exact path="/my-profile/unpretentious">
							<Dbunpretentious />
						</Route>
						<Route exact path="/my-profile/sophisticated">
							<Dbsophisticated />
						</Route>
						<Route exact path="/my-profile/intense">
							<Dbintense />
						</Route>
						<Route exact path="/my-profile/contemporary">
							<Dbcontemporary />
						</Route>
						<Route exact path="/signup">
							<Signup />
						</Route>
						<Route exact path="/aboutus">
							<Aboutus />
						</Route>
						<Route exact path="/feedback">
							<Feedback />
						</Route>
						<Route exact path="/Login">
							<Login />
						</Route>
						<Route exact path="/albums">
							<Services />
						</Route>
						<Route exact path="/checkout">
							<Paywall />
						</Route>
					</Switch>
					</AuthContexProvider>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
