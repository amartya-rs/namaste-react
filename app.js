import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Nested structure
 */

const parent = React.createElement(
   "div",
   { id: "parent" },
   React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "I am h1"),
      React.createElement("h1", {}, "I am h1 second"),
   ])
);

const h1 = React.createElement(
   "h1",
   { className: "heading" },
   "Namaste react!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
