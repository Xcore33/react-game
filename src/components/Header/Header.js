import React from "react";
import "./Header.css";

function Header(props) {
  const renderGameItem = () => {
    let gameItem = ["ROCK", "PAPER", "SCISSORS"];
    let ItemClass = "gameItem";
    return (
      <div className={ItemClass}>
        {gameItem.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
    );
  };
  return (
    <div className="row d-flex justify-content-center">
      <div className="header col-10 col-lg-6 mt-5">
        <div className="row h-100 d-flex align-items-center px-2">
          <div className="col-8 col-lg-10 d-flex flex-column">
            {renderGameItem()}
          </div>
          <div className="col-4 col-lg-2 score-container">
            <div className="score-text">
              TOTAL<br />
              SCORE
            </div>
            <div className="score-value">{props.userScore}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
