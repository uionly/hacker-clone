import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter, Redirect, useHistory } from "react-router-dom";
import { fetchNews } from "../actions/index";

const Pagination = (props) => {
  const history = useHistory();
  let { currPage } = props;
  currPage = parseInt(currPage);
  const decrementPageNum = (e) => {
    e.preventDefault();
    currPage = currPage - 1;
    fetchNews(currPage);
  };
  const incrementPageNum = (e) => {
    e.preventDefault();
    currPage = currPage + 1;
    return history.push(`/news&p=${currPage}`);
  };
  return (
    <div className="pagination">
      <a href="#" onClick={decrementPageNum}>
        Previous |{" "}
      </a>
      <a href="#" onClick={incrementPageNum}>
        Next
      </a>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchNews }, dispatch);
}
export default withRouter(connect(null, mapDispatchToProps)(Pagination));
