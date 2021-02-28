import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import FooterPage from "./components/Footer/Footer";
import GameBoardContainer from "./components/GameBoardContainer/GameBoardContainer";
import AdvancedGame from "./components/AdvancedGame//AdvancedGame";
import GameBoardProcess from "./components/GameBoardProcess/GameBoardProcess";
import RulesButton from "./components/RulesButton/RulesButton";
import ResetButton from "./components/ResetButton/ResetButton";
import SwitchButton from "./components/SwitchButton/SwitchButton";
import Fade from "react-reveal/Fade";
import JoyrideComponent from "./components/Joyride/Joyride";

function App() {
  const getInitialScore = () => {
    let initialScore = 0;
    if (localStorage.getItem("basicGameScore")) {
      initialScore = parseInt(localStorage.getItem("basicGameScore"), 10);
    }
    return initialScore;
  };
  const [gamerScore, handleGamerScore] = useState(() => {
    const initialScore = getInitialScore();
    return initialScore;
  });
  const [gameType, switchGameMode] = useState("basic");
  const updateGamerScore = (score, event) => {
    if (event === "update") {
      handleGamerScore(score);
      if (gameType === "basic") {
        localStorage.setItem("basicGameScore", score);
      } else {
        localStorage.setItem("advancedGameScore", score);
      }
    } else {
      let existingScore = 0;
      const existingGameType = gameType;
      if (
        existingGameType === "advanced" &&
        localStorage.getItem("basicGameScore")
      ) {
        existingScore = parseInt(localStorage.getItem("basicGameScore"), 10);
      } else if (localStorage.getItem("advancedGameScore")) {
        existingScore = parseInt(localStorage.getItem("advancedGameScore"), 10);
      }
      handleGamerScore(existingScore);
    }
  };
  return (
    <Router>
      <div
        className="App d-flex flex-column align-items-center"
        id="mainElementContainer"
      >
        <JoyrideComponent
          runCondition={gameType === "advanced"}
        />
        <div className="container">
          <Fade top>
            <Header gamerScore={gamerScore} />
          </Fade>
          <Switch>
            <Route path="/basic" exact={true}>
              <GameBoardContainer />
            </Route>
            <Route path="/basic/choice">
              <GameBoardProcess
                gamerScore={gamerScore}
                updateGamerScore={updateGamerScore}
              />
            </Route>
            <Route path="/advanced" exact={true}>
              <AdvancedGame />
            </Route>
            <Route path="/" exact={true}>
              <GameBoardContainer />
            </Route>
          </Switch>
          <Fade bottom>
            <div
              className="row d-flex justify-content-center"
              id={"rulesButtonsContainer"}
            >
              <div className="d-flex flex-row buttonsContainer">
                <RulesButton gameType={gameType}/>
                <SwitchButton
                  gameType={gameType}
                  switchGameMode={switchGameMode}
                  updateGamerScore={updateGamerScore}
                />
                <ResetButton updateGamerScore={updateGamerScore} />
              </div>
            </div>
          </Fade>
        </div>
        <FooterPage />
      </div>
    </Router>
  );
}

export default App;
