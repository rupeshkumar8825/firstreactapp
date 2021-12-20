// in this we will write the code for navbar to make the code better organised
// we also need to include the css
// import "../index.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//we have to take the arguments passed by the navbar as attribute from the index.js file using the props
function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit"> Search </button>
              {/* <button type="button" class="btn btn-success">Success</button> */}
            </form>
          </div>
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
