// in this we will make our own app using the react app
import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import Navbar from "./components/Navbar";

ReactDOM.render(
  <>
    {/* calling the App only to render its content  */}

    <Navbar></Navbar>
  </>,
  document.getElementById("root")
);

console.log("everything went fine");
console.log("we have made the navbar for the react application");
