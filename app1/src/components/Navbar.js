// in this we will write the code for navbar to make the code better organised
// we also need to include the css
import "../index.css";

function Navbar() {
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

// now we have to export this file to other so that it can be used
export default Navbar;
