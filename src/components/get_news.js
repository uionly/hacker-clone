import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchNews } from "../actions/index";
import Header from "./header";
import NewsItem from "./newsitem";
import Pagination from "./pagination";
import Graph from "./graph";
const NewsFeed = (props) => {
  const { fetchNews } = props;
  useEffect(() => {
    fetchNews(1);
  }, []);
  return (
    <div>
      <Header />
      <NewsItem />
      <Pagination />
      <Graph />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchNews }, dispatch);
}

export default connect(null, mapDispatchToProps)(NewsFeed);
