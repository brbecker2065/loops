import React, { Component } from "react";

import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="box1" />
        <div className="box2" />
        <div className="box3" />
        <div className="box4" />
        <div className="box5" />
        <div className="box6" />
        <div className="box7" />
        <div className="box8" />
        <div className="box9" />
        <div className="xtoken" />
        <button click value="x">
          x
          <img
            src="http://i.imgur.com/60PVLis.png"
            width="25"
            height="25"
            alt=""
          />
          <span className="xtoken" />
        </button>
        <button value="o">
          o<span className="otoken" />
        </button>
      </div>
    );
  }
}

//addEventHandler.button("click"=button(value))
const button = document.querySelector("button");

button.addEventListener("click", event => {
  button.innerHTML = `Click count: ${event.detail}`;
});

export default App;
