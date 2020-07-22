import React from "react";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchNews } from "../actions/index";
import Header from "./header";
import NewsItem from "./newsitem";
import Pagination from "./pagination";
import Graph from "./graph";
const NewsFeed = (props) => {
  const [news, setNews] = useState(props.news);
  const [pageNum, setPageNum] = useState(1);
  useEffect(() => {
    const newsData = props.fetchNews(pageNum);
    setNews(newsData);
    setPageNum(pageNum);
    console.log(news);
  }, [pageNum]);
  return (
    <div>
      <Header />
      <NewsItem />
      <Pagination />
      <Graph />
    </div>
  );
};

function mapStateToProps({ pageNum, news }) {
  return { pageNum, news };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchNews }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
