import React from "react";
import ReactDOM from "react-dom";

const dayHour = new Date().getHours();
let sayHello;
let titleColor = {
  color: ""
};

if (dayHour < 12) {
  sayHello = "Good Morning";
  titleColor.color = "red";
} else if (dayHour < 18) {
  sayHello = "Good Afternoon";
  titleColor.color = "green";
} else {
  sayHello = "Good Evening";
  titleColor.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={titleColor}>
      {sayHello}
    </h1>
  </div>,
  document.getElementById("root")
);

//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
