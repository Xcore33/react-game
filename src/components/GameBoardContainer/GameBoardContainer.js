import React from 'react';
import './GameBoardContainer.css';
import GameBoard from '../GameBoard/GameBoard';
import Fade from 'react-reveal/Fade';
function GameBoardContainer(props) {
  return(
      <div className="row d-flex justify-content-center">
        <Fade bottom>
          <div className="gameContainer col-10 col-lg-6 mt-3 d-flex justify-content-center align-items-center flex-column">
            <div className="gameHalfContainer d-flex">
              <div className="gameUpperLeftItem">
                <GameBoard
                componentName={'paper'}
                source={'basic'}
                />
              </div>
              <div className="gameUpperRightItem">
                <GameBoard
                componentName={'scissor'}
                source={'basic'}
                />
              </div>
            </div>
            <div className="gameHalfContainer hv-center">
              <GameBoard
                componentName={'rock'}
                source={'basic'}
              />
            </div>
          </div>
         </Fade>
      </div>
  )
}

export default GameBoardContainer;
