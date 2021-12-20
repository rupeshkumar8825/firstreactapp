// we will import the navbar here and then send the app to the indexedDB.jx file
import React from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
// importing the followig using the react router 
import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";




function App() {
  console.log("we are at the app file where we will inherit the navbar ");

  // say everything went fine
  return (
    <>
      <Router>

        <Navbar title="RUPESH"></Navbar>
        {/* adding the textarea for the application to be created here using the react and css and the javascript for the learning purpose  */}
        {/* putting the textform inside the container which is the bootstrap class for this purpose  */}
        <div className="container my-3">
          {/* <Textform heading="Enter the text to analyze"></Textform>
          <About></About> */}

          {/* now making the router for the home and about page of the application  */}
          <Routes>
            <Route path="/about" element={<About></About>} />
            <Route path="/" element={<Textform heading="Enter the text to analyze"></Textform>} />
          </Routes>
        </div>

      </Router>
    </>
  );
}

// we have to export this to other files
export default App;
