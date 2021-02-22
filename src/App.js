import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import GameBoardContainer from "./components/GameBoardContainer/GameBoardContainer";
import GameBoardProcess from "./components/GameBoardProcess/GameBoardProcess";
import Fade from "react-reveal/Fade";

function App() {
  const getInitialScore = () => {
    let initialScore = 0;
    if (localStorage.getItem("basicGameScore")) {
      initialScore = parseInt(localStorage.getItem("basicGameScore"), 10);
    }
    return initialScore;
  };
  const [userScore, handleUserScore] = useState(() => {
    const initialScore = getInitialScore();
    return initialScore;
  });
  const [gameType] = useState("basic");
  const updateUserScore = (score, event) => {
    if (event === "update") {
      handleUserScore(score);
      if (gameType === "basic") {
        localStorage.setItem("basicGameScore", score);
      }
    } else {
      let existingScore = 0;
      handleUserScore(existingScore);
    }
  };
  return (
    <Router>
      <div
        className="App d-flex flex-column align-items-center"
        id="mainElementContainer"
      >
        <div className="container" id="rpsElementsContainer">
          <Fade top>
            <Header userScore={userScore} />
          </Fade>
          <Switch>
            <Route path="/basic" exact={true}>
              <GameBoardContainer />
            </Route>
            <Route path="/basic/choice">
              <GameBoardProcess
                userScore={userScore}
                updateUserScore={updateUserScore}
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
              <div className="col-12 col-lg-6 mt-4 d-flex flex-row buttonsContainer"></div>
            </div>
          </Fade>
        </div>
      </div>
    </Router>
  );
}

export default App;
