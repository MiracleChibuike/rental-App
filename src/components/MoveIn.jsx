import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlusIcon from "../assets/images/plusicon.png";
import cancelIcon from "../assets/images/cancelIcon.png";
import minusIcon from "../assets/images/minusSign.png";
// For Importing Link
import { Link } from "react-router-dom";
import "./MoveIn.css";

const MoveIn = () => {
  const movebackToPets = useNavigate();

  const backToPets = () => {
    movebackToPets("/pets");
  };

  const toHeader = useNavigate();

  const moveToHeader = () =>{
    toHeader("/residence");
  }

  return (
    <div className="main">
      <section id="MoveIndates">
        <div className="headers">
          <div className="navs">
            <div className="back">
              <p onClick={backToPets}>Back</p>
            </div>
          </div>
          <div className="title">
            <p>HouseHold Info</p>
          </div>
          <div className="cancel">
            {/* <p>Next</p> */}
            <img src={cancelIcon} alt="cancel" id="cancel-Icon" />
          </div>
        </div>
        <div className="contentsPets">
          <p>When would you Like to move in?</p>
          <div className="date">
            <input type="date" name="" id="datesInput" />
          </div>
          <div className="checkBox">
            <input type="checkbox" name="" id="check" />
            <label htmlFor="check">I'm flexible with my move in date</label>
          </div>
          <div className="next">
            <button id="NextBtn" onClick={moveToHeader}>
              Next
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MoveIn;
