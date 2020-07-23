import React from "react";
import { connect } from "react-redux";

const Pagination = (props) => {
  return (
    <div className="pagination">
      <a href="">Previous | </a>
      <a href="">Next</a>
    </div>
  );
};
function mapStateToProps({ pageNum }) {
  return { pageNum };
}
export default connect(mapStateToProps)(Pagination);
