import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navigation from "./components/Navigation";
import CoinPage from "./pages/CoinPage";
import FeedPage from "./pages/FeedPage";

import TrendingPage from "./pages/TrendingPage";

function App() {
  return (
    <div id="App">
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>

        <Route path="/crypto/:id">
          <CoinPage />
        </Route>
        <Route path="/feedpage">
          <FeedPage />
        </Route>
        <Route path="/trending">
          <TrendingPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
