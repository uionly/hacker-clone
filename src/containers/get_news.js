import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import up from "../assets/up.png";
import "./style.css";
import { fetchNews } from "../actions/index";

class NewsFeed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.onPageChange = this.onPageChange.bind(this);
  }

  componentWillMount() {
    const news = this.props.fetchNews(1);
    this.setState({ news });
  }

  onPageChange(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <div>
        <div className="header">
          <div className="comments-section">Comments</div>
          <div className="vote-count-section">Vote Count</div>
          <div className="up-vote-section">Up Vote</div>
          <div className="news-section">News Details</div>
        </div>

        <div className="d-flex">
          <div className="comments-section">36</div>
          <div className="font-orange vote-count-section">36</div>
          <div className="up-vote-section">
            {" "}
            <a href="#">
              <img src={up} width="20%" />
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
              <img src={up} width="20%" />
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

        <div className="pagination">
          <a href="">Previous | </a>
          <a href="">Next</a>
        </div>

        <div className="graph-container">Graph here</div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchNews }, dispatch);
}

export default connect(null, mapDispatchToProps)(NewsFeed);
