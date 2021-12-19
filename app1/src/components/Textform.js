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
  // defining the state variable to keep track of the contents inside the textarea
  const [text, setText] = useState("enter the text inside the area provided");
  // say evrything went fine
  return (
    <>
      <h1 className="heading">{props.title}</h1>
      <div className="container">
        {/* we have made our own handlers to handle the events like the click or change  */}
        <textarea
          name="Textarea"
          value={text}
          onChange={handleOnChange}
          id="textarea"
          cols="150"
          rows="30"
        ></textarea>
        <button className="btn" onClick={handleOnClick}>
          Convert to uppercase
        </button>
      </div>
    </>
  );
}

// we have to export this to make use of it to other files
export default Textform;
