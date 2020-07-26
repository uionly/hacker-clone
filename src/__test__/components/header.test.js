import React from "react";
import ReactDOM from "react-dom";
import Header from "../../components/header";
it("renders As it is", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Header></Header>, div);
});
