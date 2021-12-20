// we will import the navbar here and then send the app to the indexedDB.jx file
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App() {
  console.log("we are at the app file where we will inherit the navbar ");

  // say everything went fine
  return (
    <>
      <Navbar title="RUPESH"></Navbar>
      {/* adding the textarea for the application to be created here using the react and css and the javascript for the learning purpose  */}
      {/* putting the textform inside the container which is the bootstrap class for this purpose  */}
      <div className="container my-3">
        <Textform heading="Enter the text to analyze"></Textform>
      </div>
    </>
  );
}

// we have to export this to other files
export default App;
