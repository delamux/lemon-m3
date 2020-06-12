import React from "react";

const logoImg = require("./assets/images/logo_1.png");
const classes = require("./helloWorldStyles.scss");

export const HelloWorldComponent = () => {
  return (
    <div className={classes.cardSize + " card"}>
      <img src={logoImg} className="card-img-top" alt="lemon" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Lemon card welcome</p>
        <a href="#" className="btn btn-outline-secondary btn-lg btn-block">
          Do nothing
        </a>
      </div>
    </div>
  );
};
