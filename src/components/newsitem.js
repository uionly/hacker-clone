import React from "react";
import { connect } from "react-redux";
import upVoteImg from "../assets/up.png";
const NewsItem = (props) => {
  return (
    <div>
      <div className="d-flex">
        <div className="comments-section">36</div>
        <div className="font-orange vote-count-section">36</div>
        <div className="up-vote-section">
          {" "}
          <a href="#">
            <img src={upVoteImg} width="20%" />
          </a>{" "}
        </div>
        <div className="font-weight-bold news-section">
          Seemingly Impossible Swift Program{" "}
          <span className="small-font">
            <a href="#">(fewbutripe.com)</a> by{" "}
            <span className="text-black">wool_gather</span> 5 hours ago{" "}
            <a href="">[ hide ]</a>
          </span>{" "}
        </div>
      </div>
      <div className="d-flex gray-background">
        <div className="comments-section">36</div>
        <div className="vote-count-section">36</div>
        <div className="up-vote-section">
          {" "}
          <a href="#">
            <img src={upVoteImg} width="20%" />
          </a>{" "}
        </div>
        <div className="font-weight-bold news-section">
          Seemingly Impossible Swift Program{" "}
          <span className="small-font">
            <a href="#">(fewbutripe.com)</a> by{" "}
            <span className="text-black">wool_gather</span> 5 hours ago{" "}
            <a href="">[ hide ]</a>
          </span>{" "}
        </div>
      </div>{" "}
    </div>
  );
};

function mapStateToProps({ news }) {
  return { news };
}

export default connect(mapStateToProps)(NewsItem);
