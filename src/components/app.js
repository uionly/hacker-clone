import React from "react";
import "../style/style.css";
import NewsFeed from "./news_feed";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/news">
          <NewsFeed />
        </Route>
        <Route
          exact
          path="/"
          render={() => {
            return <Redirect to="/news" />;
          }}
        />
      </Switch>
    </Router>
  );
};
export default App;
