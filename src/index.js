import { React } from "react";
import { createRoot } from "react-dom/client";

const now = new Date();
const hours = now.getHours();
console.log(hours);

let content;
let custstyle = {};

if (hours >= 0 && hours < 12) {
  content = "Good Morning";
  custstyle.color = "red";
} else if (hours >= 12 && hours < 18) {
  content = "Good Afternoon";
  custstyle.color = "green";
} else {
  content = "Good Evening";
  custstyle.color = "blue";
}
const root = createRoot(document.getElementById("root"));
root.render(
  <h1 className="heading" style={custstyle}>
    {content}
  </h1>
);
//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
