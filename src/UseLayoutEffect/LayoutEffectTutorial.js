import { useLayoutEffect, useEffect, useRef } from "react";

function LayoutEffectTutorial() {
  const inputRef = useRef(null);

  // Layout always calls before the useEffect or the page is rendered
  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);
  //useEffect is call after the page is rendered
  useEffect(() => {
    inputRef.current.value = "HELLO";
  }, []);

  return (
    <div className="App">
      <input ref={inputRef} value="PEDRO" style={{ width: 400, height: 60 }} />
    </div>
  );
}

export default LayoutEffectTutorial;
