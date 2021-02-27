import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import FooterPage from "./components/Footer/Footer";
import GameBoardContainer from "./components/GameBoardContainer/GameBoardContainer";
import GameBoardProcess from "./components/GameBoardProcess/GameBoardProcess";
import RulesButton from "./components/RulesButton/RulesButton";
import Fade from "react-reveal/Fade";

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
  const [gameType] = useState("basic");
  const updateGamerScore = (score, event) => {
    if (event === "update") {
      handleGamerScore(score);
      if (gameType === "basic") {
        localStorage.setItem("basicGameScore", score);
      }
    } else {
      let existingScore = 0;
      handleGamerScore(existingScore);
    }
  };
  return (
    <Router>
      <div
        className="App d-flex flex-column align-items-center"
        id="mainElementContainer"
      >
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
            <Route path="/" exact={true}>
              <GameBoardContainer />
            </Route>
          </Switch>
          <Fade bottom>
            <div
              className="row d-flex justify-content-center"
              id={"rulesButtonsContainer"}
            >
              <div className="col-12 col-lg-6 mt-4 d-flex flex-row buttonsContainer">
                <RulesButton />
                {/* <ResetButton updateUserScore={updateGamerScore} /> */}
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
