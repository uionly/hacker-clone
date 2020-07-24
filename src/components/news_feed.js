import React from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useParams, Link } from "react-router-dom";
import { fetchNews } from "../actions/index";
import Header from "./header";
import NewsItem from "./newsitem";
import Graph from "./graph";
import { withRouter, Redirect } from "react-router-dom";
const NewsFeed = (props) => {
  const { fetchNews } = props;
  let { page } = useParams();
  const [currentPage, setCurrentPage] = useState(page);
  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage]);
  const decrementPageNum = (e) => {
    e.preventDefault();
    setCurrentPage(parseInt(currentPage) - 1);
  };
  const incrementPageNum = (e) => {
    e.preventDefault();
    setCurrentPage(parseInt(currentPage) + 1);
  };
  // Get parameters from the current URL
  const pagination = (
    <div className="pagination">
      {currentPage > 1 ? (
        <a href="#" onClick={decrementPageNum}>
          Previous |{" "}
        </a>
      ) : (
        " "
      )}
      <a href="#" onClick={incrementPageNum}>
        Next
      </a>
    </div>
  );
  return (
    <div>
      <Header />
      <NewsItem />
      {pagination}
      <Graph />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchNews }, dispatch);
}

export default withRouter(connect(null, mapDispatchToProps)(NewsFeed));
