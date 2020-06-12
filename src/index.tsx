import React from "react";
import ReactDOM from "react-dom";
import { HelloWorldComponent } from "./helloWorldComponent";
import { NavbarComponent } from "./navbarComponent";

ReactDOM.render(
  <div>
    <NavbarComponent />
    <HelloWorldComponent />
  </div>,
  document.getElementById("root")
);
