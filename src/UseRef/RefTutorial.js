import React, { useRef } from "react";
// Easy way to access and manipulate doms elements
function RefTutorial() {
  const inputRef = useRef(null);

  const onClick = () => {
    // important the "current"
    console.log(inputRef.current.value);
    // focus = when click on button i can start typing
    inputRef.current.focus();
    // to clean the input value
    inputRef.current.value = "";
  };
  return (
    <div>
      <h1>Pedro</h1>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
}

export default RefTutorial;
