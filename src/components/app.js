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
        <Route path="/:pagination">
          <NewsFeed />
        </Route>
        <Route
          exact
          path="/"
          render={() => {
            return <Redirect to="/1" />;
          }}
        />
      </Switch>
    </Router>
  );
};
export default App;
