// lets make the textarea for the website app that we are making right now
import { useState } from "react";
import React from "react";

// we also have the props here so fetching the argument for this purpose
function Textform(props) {
  console.log("right now i am at the textform component");
  // now we have to design for this the proper upper case converter app using the react for the elarning purpose
  //   defining the handlers here
  function handleOnChange(event) {
    console.log("the onchange handler is called ");
    setText(event.target.value);

    // say everything went fine
    return;
  }

  function handleOnClick() {
    console.log("the button has been clicked ");
    console.log("we have tochange the current string to the alphabet");
    let curr_text = text.toUpperCase();
    setText(curr_text);

    // say everything went fine
    return;
  }

  // defining the handle for the converting the text to the lower text 
  function handleLoClick() {
    console.log("we are using  the lower case button to change it to lower case");
    let curr_text = text.toLowerCase();
    setText(curr_text);

    // say everything went fine 
    return;
  }

  // defining the handler for the clearing the text that we have right now 
  function handleClearText() {
    console.log("clearing the text and resetting the textarea that we have right now");
    setText("");

    // say everything went fine 
    return;
  }

  // defining the state variable to keep track of the contents inside the textarea
  const [text, setText] = useState("enter the text inside the area provided");
  // say evrything went fine
  return (
    <>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" onChange={handleOnChange} value={text} id="exampleFormControlTextarea1" rows="8"></textarea>
        <button type="button" className="btn btn-primary my-3 mx-3" onClick={handleOnClick}>Convert To UpperCase</button>
        <button type="button" className="btn btn-primary my-3" onClick={handleLoClick}>Convert To LowerCase</button>
        <button type="button" className="btn btn-primary my-3 mx-3" onClick={handleClearText}>Clear Text</button>
      </div>
      {/* now adding the container for the text summary for the user using the react  */}
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
      </div>

      {/* adding the preview as well for the user  */}
      <h2>Preview</h2>
      <p>{text}</p>
    </>
  );
}

// we have to export this to make use of it to other files
export default Textform;
