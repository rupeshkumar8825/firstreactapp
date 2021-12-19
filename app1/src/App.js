// we will import the navbar here and then send the app to the indexedDB.jx file
import Navbar from "./components/Navbar";

function App() {
  console.log("we are at the app file where we will inherit the navbar ");

  // say everything went fine
  return (
    <>
      <Navbar title="rupesh kumar"></Navbar>
    </>
  );
}

// we have to export this to other files
export default App;
