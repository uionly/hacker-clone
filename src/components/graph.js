import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Line } from "react-chartjs-2";

const Graph = (props) => {
  const { news } = props;
  let currentVotes = JSON.parse(localStorage.getItem("currentVotes")) || {};
  let graphLabels = [];
  let graphDataSet = [];
  if (news[0]) {
    news[0].hits.forEach((item) => {
      graphDataSet.push(currentVotes[item.objectID] || 0);
      graphLabels.push(item.objectID);
    });
  }
  console.log(graphDataSet);
  const data = {
    labels: graphLabels,
    datasets: [{ label: "votes", data: graphDataSet }],
  };
  return (
    <div className="graph-container">
      <Line width={400} height={200} xLabel="ID" yLabel="Votes" data={data} />
    </div>
  );
};
function mapStateToProps({ news }) {
  return { news };
}
export default withRouter(connect(mapStateToProps)(Graph));
