import React from "react";
import "./Header.css";

function Header(props) {
  const renderGameName = () => {
    let gameName = ["ROCK", "PAPER", "SCISSORS"];
    let ItemClass = "gameName";
    return (
      <div className={ItemClass}>
        {gameName.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
    );
  };
  return (
    <div className="row d-flex justify-content-center">
      <div className="header col-10 col-mg-6">
        <div className="row h-100 d-flex align-items-center px-2">
          <div className="col-8 col-lg-10 d-flex flex-column">
            {renderGameName()}
          </div>
          <div className="col-6 col-lg-2 score-container">
            <div className="score-text">
              TOTAL<br />
              SCORE
            </div>
            <div className="score-value">{props.gamerScore}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
