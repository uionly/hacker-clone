import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useParams } from "react-router-dom";
import { fetchNews } from "../actions/index";
import Header from "./header";
import NewsItem from "./newsitem";
import Pagination from "./pagination";
import Graph from "./graph";
const NewsFeed = (props) => {
  const { fetchNews } = props;
  let { pagination } = useParams();
  console.log("page", pagination);
  useEffect(() => {
    fetchNews(pagination);
  }, [pagination]);
  // Get parameters from the current URL
  return (
    <div>
      <Header />
      <NewsItem />
      <Pagination currPage={pagination} />
      <Graph />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchNews }, dispatch);
}

export default connect(null, mapDispatchToProps)(NewsFeed);
