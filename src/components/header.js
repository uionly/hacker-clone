import React from "react";
const Header = () => {
  return (
    <div className="header" role="heading">
      <div data-test-id="comments-section" className="comments-section">
        Comments
      </div>
      <div className="vote-count-section">Vote Count</div>
      <div className="up-vote-section">Up Vote</div>
      <div className="news-section">News Details</div>
    </div>
  );
};
export default Header;
