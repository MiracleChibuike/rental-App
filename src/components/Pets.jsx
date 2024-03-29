import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlusIcon from "../assets/images/plusicon.png";
import cancelIcon from "../assets/images/cancelIcon.png";
import minusIcon from "../assets/images/minusSign.png";
// For Importing Link
import { Link } from "react-router-dom";
import "./Pets.css";



const Pets = () => {
  const navigate = useNavigate();

  const backToHeadre = () => {
    navigate("/header");
  };

  // Navigate to MoveIn Page
  const navigateToDates = useNavigate(); // Use useNavigate hook

  const goToMoveIn = () => {
    navigate("/dates"); // Use navigate function for navigation
  };

  // Counts Increase and decrease

  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  // For second Count
  const [count2, setCount2] = useState(0);
  const increaseCount2 = () => {
    setCount2(count2 + 1);
  };

  const decreaseCount2 = () => {
    if (count2 > 1) {
      setCount2(count2 - 1);
    }
  };
  //   For third Count
  const [count3, setCount3] = useState(0);
  const increaseCount3 = () => {
    setCount3(count3 + 1);
  };

  const decreaseCount3 = () => {
    if (count3 > 1) {
      setCount3(count3 - 1);
    }
  };

  //   For 4th Count
  const [count4, setCount4] = useState(0);
  const increaseCount4 = () => {
    setCount4(count4 + 1);
  };

  const decreaseCount4 = () => {
    if (count4 > 1) {
      setCount4(count4 - 1);
    }
  };

  //    For last Count Others
  const [lastCount, setCountLast] = useState(0);
  const increaseCountLast = () => {
    setCountLast(lastCount + 1);
  };

  const decreaseCountLast = () => {
    if (lastCount > 1) {
      setCountLast(lastCount - 1);
    }
  };

  return (
    <div className="main">
      {/* For Pets - Household Info */}
      <section id="Pets">
        <div className="headers">
          <div className="navs">
            <div className="back">
              <p onClick={backToHeadre}>Back</p>
            </div>
          </div>
          <div className="title">
            <p>HouseHold Info</p>
          </div>
          <div className="cancel">
            <img src={cancelIcon} alt="cancel" id="cancel-Icon" />
          </div>
        </div>
        <div className="contents">
          <p>How many pets will be living in the home?</p>
          <div className="outputs">
            <div className="output1">
              <div className="dogs1">
                <p>Small Dogs</p>
                <small>Weighs less than 25 lbs</small>
              </div>
              <div className="counts">
                <img
                  src={minusIcon}
                  id="minus-Icon"
                  alt=""
                  onClick={decreaseCount}
                />{" "}
                <p>{count}</p>
                <img
                  src={PlusIcon}
                  id="plus-Icon"
                  alt=""
                  onClick={increaseCount}
                />
              </div>
            </div>
            {/* Output 2 */}
            <div className="output1">
              <div className="dogs1">
                <p>Medium Dogs</p>
                <small>Weighs 25 to 50 lbs</small>
              </div>
              <div className="counts">
                <img
                  src={minusIcon}
                  id="minus-Icon"
                  alt=""
                  onClick={decreaseCount2}
                />{" "}
                <p>{count2}</p>
                <img
                  src={PlusIcon}
                  id="plus-Icon"
                  alt=""
                  onClick={increaseCount2}
                />
              </div>
            </div>
            {/* output 3 */}
            <div className="output1">
              <div className="dogs1">
                <p>Large Dogs</p>
                <small>Weighs more than 50 lbs</small>
              </div>
              <div className="counts">
                <img
                  src={minusIcon}
                  id="minus-Icon"
                  alt=""
                  onClick={decreaseCount3}
                />{" "}
                <p>{count3}</p>
                <img
                  src={PlusIcon}
                  id="plus-Icon"
                  alt=""
                  onClick={increaseCount3}
                />
              </div>
            </div>
            {/* output 4 */}
            <div className="output1">
              <div className="dogs1">
                <p>Cats</p>
                {/* <small>Weighs less than 25 lbs</small> */}
              </div>
              <div className="counts">
                <img
                  src={minusIcon}
                  id="minus-Icon"
                  alt=""
                  onClick={decreaseCount4}
                />{" "}
                <p>{count4}</p>
                <img
                  src={PlusIcon}
                  id="plus-Icon"
                  alt=""
                  onClick={increaseCount4}
                />
              </div>
            </div>
            {/* Others output */}
            <div className="output1">
              <div className="dogs1">
                <p>Other pets</p>
              </div>
              <div className="counts">
                <img
                  src={minusIcon}
                  id="minus-Icon"
                  alt=""
                  onClick={decreaseCountLast}
                />{" "}
                <p>{lastCount}</p>
                <img
                  src={PlusIcon}
                  id="plus-Icon"
                  alt=""
                  onClick={increaseCountLast}
                />
              </div>
            </div>
          </div>
          <div className="next">
            <button id="NextBtn" onClick={goToMoveIn}>
              Next
            </button>
          </div>
          <small>*Assistant animals do not need to be added</small>
        </div>
      </section>
    </div>
  );
};

export default Pets;
