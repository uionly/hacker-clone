import React from "react";
import "../style/style.css";
import NewsFeed from "./news_feed";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/news/:page">
          <NewsFeed />
        </Route>
        <Route
          exact
          path="/"
          render={() => {
            return <Redirect to="/news/1" />;
          }}
        />
        <Route
          exact
          path="/news"
          render={() => {
            return <Redirect to="/news/1" />;
          }}
        />
      </Switch>
    </Router>
  );
};
export default App;
