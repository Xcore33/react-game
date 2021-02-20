import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "./components/Header/Header";
import Fade from "react-reveal/Fade";
import GameBoardContainer from './components/GameBoardContainer/GameBoardContainer.js';


function App() {
  return (
    <Router>
      <div
        className="App d-flex flex-column align-items-center"
        id="mainElementContainer"
      >
        <div className="container" id="gameElementsContainer">
          <Fade top>
            <Header />
          </Fade>
          <Switch>
            <Route path="/basic" exact={true}>
              <GameBoardContainer />
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
            </div>
          </Fade>
        </div>
      </div>
    </Router>
  );
}

export default App;
