import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Nested structure
 */

// const parent = React.createElement(
//    "div",
//    { id: "parent" },
//    React.createElement("div", { id: "child" }, [
//       React.createElement("h1", {}, "I am h1"),
//       React.createElement("h1", {}, "I am h1 second"),
//    ])
// );

/** JSX */
const parent = (
   <div id="parent">
      <div id="child">
         <h1>I am h1</h1>
         <h1> h1</h1>
      </div>
   </div>
);

const Title = () => {
   return <h1>this is title</h1>;
};

/** Functional Component */
const Parent = () => (
   <div>
      <Title />
      <h1>this is h1 tag 1</h1>
      <h1>this is h1 tag 2</h1>
   </div>
);

const h1 = React.createElement(
   "h1",
   { className: "heading" },
   "Namaste react!"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Parent />);
