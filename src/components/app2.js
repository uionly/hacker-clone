import React from "react";
import Loadable from "react-loadable";
import "../style/style.css";
import { Switch, Route } from "react-router-dom";
const App = () => {
  const AsyncComponent = Loadable({
    loader: () => import(/* webpackChunkName: "newsFeedChunk" */ "./news_feed"),
    loading: () => <div>loading...</div>,
    modules: ["newsFeedChunk"],
  });
  return (
    <Switch>
      <Route path="/news/:page">
        <AsyncComponent />
      </Route>
    </Switch>
  );
};
export default App;
