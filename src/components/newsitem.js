import React from "react";
import { connect } from "react-redux";
import upVoteImg from "../assets/up.png";
const NewsItem = (props) => {
  console.log(props);
  let listItems = <div></div>;
  if (props.news && props.news.length > 0) {
    const newsFeedData = props.news[0].hits;
    console.log(newsFeedData);
    listItems = newsFeedData.map((newsFeed) => (
      <div key={newsFeed.objectID} className="d-flex gray-background">
        <div className="comments-section">{newsFeed.num_comments || 0} </div>
        <div className="vote-count-section">36</div>
        <div className="up-vote-section">
          {" "}
          <a href="#">
            <img src={upVoteImg} width="20%" />
          </a>{" "}
        </div>
        <div className="font-weight-bold news-section">
          {newsFeed.story_title}{" "}
          <span className="small-font">
            <a href={newsFeed.story_urls}>(ok)</a> by{" "}
            <span className="text-black">wool_gather</span>{" "}
            {newsFeed.created_at} <a href="">[ hide ]</a>
          </span>{" "}
        </div>
      </div>
    ));
  }
  return <ul>{listItems}</ul>;
};
function mapStateToProps({ news }) {
  return { news };
}

export default connect(mapStateToProps)(NewsItem);
