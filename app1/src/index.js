// in this we will make our own app using the react app
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

ReactDOM.render(
  <>
    <nav className="navbar">
      <ul className="navigation">
        <li>
          <a href="#">Textutils</a>
        </li>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact us</a>
        </li>
      </ul>

      {/* also we have to include the search bar at the end of this  */}
      <div className="searchbar">
        <input type="text" className="searchbox" placeholder="Search here" />
        <button>Search</button>
      </div>
    </nav>
  </>,
  document.getElementById("root")
);

console.log("everything went fine");
