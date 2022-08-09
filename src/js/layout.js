import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthContexProvider } from "../Context/AuthContext";
import { Container } from "react-bootstrap";
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

import { Navba } from "./component/navbar";
import { Footer } from "./component/footer";
import { Singup } from "./component/Signup";
import { Signin } from "./component/Signin";
import { Dashboard } from "./component/Dashboard";
import MusicFile from "./component/MusicFile"
import ProtectedRoute from "./component/ProtectedRouter";
import MusicAPI from "./component/MusicAPI";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop>
        <Navba />
        <Container
          className="d-flex aligen-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <AuthContexProvider>
              <Switch>
                <Route exact path="/Singup">
                  <Homepage />
                </Route>
                <Route exact path="/">
                  <Singup />
                </Route>
                <Route exact path="/Signin">
                  <Signin />
                </Route>
                <Route exact path="/MusicFile">
                  <MusicFile />
                </Route>
                <Route exact path="/MusicAPI">
                  <MusicAPI />
                </Route>
                <Route exact path="/Dashboard">
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
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
            </AuthContexProvider>
          </div>
        </Container>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default injectContext(Layout);
