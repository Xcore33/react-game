import React, { useState, useEffect } from "react";
import "./GameBoardProcess.css";
import GameBoard from "../GameBoard/GameBoard";
import {
  getAIChoice,
  getGameResult,
  calculateGameScore,
} from "../mathUtils";
import { withRouter } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Flash from "react-reveal/Flash";

function GameBoardProcess(props) {
  const [AIChoice, updateAIChoice] = useState("empty");
  const [gameResult, updateGameResult] = useState(null);
  const [gamerChoice] = useState(props.location.state.gamerChoice);
  const gameType = props.location.state.gameType;
  const { gamerScore, updateGamerScore } = props;
  useEffect(() => {
    const timer = setTimeout(() => {
      const randomAIChoice = getAIChoice(gameType);
      updateAIChoice(randomAIChoice);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    if (AIChoice !== "empty") {
      const timer = setTimeout(() => {
        const gameResult = getGameResult(gamerChoice, AIChoice);
        const updatedScore = calculateGameScore(gamerScore, gameResult);
        updateGamerScore(updatedScore, "update");
        updateGameResult(gameResult);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [AIChoice, gamerChoice]);
  const renderChoiceComponent = (componentName, text) => {
    return (
      <div className="itemHalf hv-center flex-column">
        <div className="itemHalfUpperSection hv-center">
          <Fade right when={componentName !== "empty"}>
            <GameBoard componentName={componentName} source={"basic"} />
          </Fade>
        </div>
        <div className="itemHalfLowerSection text-center mt-2">{text}</div>
      </div>
    );
  };
  const redirectToHome = () => {
    props.history.push(`/${gameType}`);
  };
  const renderGameResult = () => {
    if (gameResult === null) {
      return <div></div>;
    } else {
      return (
        <div
          className="w-100 hv-center flex-column gameResultText"
          id={"gameResultContainer"}
        >
          <span className="gameResultRuleText">{gameResult.rule}</span>
          <span>{gameResult.text}</span>
          <button
            type="button"
            className="btn btn-orange playAgainButton"
            onClick={() => redirectToHome()}
          >
            PLAY AGAIN
          </button>
        </div>
      );
    }
  };
  return (
    <div className="row d-flex row d-flex align-items-center flex-column">
      <div className="item col-10 col-lg-6 mt-3 hv-center">
        {renderChoiceComponent(gamerChoice, "YOU PICKED")}
        {renderChoiceComponent(AIChoice, "AI PICKED")}
      </div>
      <div className="gameResult col-10 col-lg-6 mt-2 hv-center">
        <Flash bottom when={gameResult !== null}>
          {renderGameResult()}
        </Flash>
      </div>
    </div>
  );
}

export default withRouter(GameBoardProcess);
