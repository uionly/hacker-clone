import React from "react";
import TimeAgo from "react-timeago";
import { connect } from "react-redux";
import upVoteImg from "../assets/up.png";
const NewsItem = (props) => {
  let listItems = <div></div>;
  const getDomain = (url) => {
    if (url) {
      const url_object = new URL(url);
      return url_object.hostname;
    } else {
      return "";
    }
  };
  if (props.news && props.news.length > 0) {
    const newsFeedData = props.news[0].hits;
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
          {newsFeed.title}{" "}
          <span className="small-font">
            <a href={newsFeed.url} target="_blank">
              ({getDomain(newsFeed.url)})
            </a>{" "}
            by <span className="text-black">{newsFeed.author}</span>{" "}
            <TimeAgo date={newsFeed.created_at} /> <a href="">[ hide ]</a>
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
