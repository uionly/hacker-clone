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
import { withRouter } from "react-router-dom";
const NewsFeed = (props) => {
  const { fetchNews } = props;

  let pagination = 1;
  console.log("page", pagination);
  useEffect(() => {
    fetchNews(pagination);
  }, [pagination, fetchNews]);
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

export default withRouter(connect(null, mapDispatchToProps)(NewsFeed));
