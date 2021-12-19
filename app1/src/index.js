// in this we will make our own app using the react app
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <>
    {/* calling the App only to render its content  */}
    <App></App>
  </>,
  document.getElementById("root")
);

console.log("everything went fine");
