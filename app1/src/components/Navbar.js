// in this we will write the code for navbar to make the code better organised
// we also need to include the css
import "../index.css";
import PropTypes from "prop-types";

//we have to take the arguments passed by the navbar as attribute from the index.js file using the props
function Navbar(props) {
  return (
    <>
      <nav className="navbar">
        <ul className="navigation">
          <li>
            <a href="#">{props.title}</a>
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

// now we have to export this file to other so that it can be used
export default Navbar;

// we can also have the type defined on the props that you have defined
Navbar.propType = {
  title: PropTypes.string,
};
