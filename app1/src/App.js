// we can make the component for the bar for the better modular code using the react
import React from "react";
import "./index.css";

function App() {
  console.log(
    "this is the App file in which we have writtent the code for the navbar"
  );
  return (
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
    </>
  );
}

// now we have to export the module as well so that others can be used properly
export default App;
