import React from "react";
import ReactDOM from "react-dom";
import { HelloWorldComponent } from "./helloWorldComponent";
import { NavbarComponent } from "./navbarComponent";

console.log(`este es mi api url: ${process.env.API_BASE}`);
ReactDOM.render(
  <div>
    <NavbarComponent />
    <HelloWorldComponent />
  </div>,
  document.getElementById("root")
);
