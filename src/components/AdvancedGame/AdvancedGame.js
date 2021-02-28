import React from 'react';
import './AdvancedGame.css';
import GameBoard from '../../components/GameBoard/GameBoard';

import Fade from 'react-reveal/Fade';

function AdvancedGame(props) {
    return(
        <div className="row d-flex justify-content-center">
            <Fade bottom>
            <div className="advancedGameContainer col-10 col-lg-4 col-md-6 d-flex justify-content-center mt-3 flex-column">
                <div className="advancedGameTopContainer">
                    <GameBoard
                    componentName={'scissor'}
                    source={'advanced'}
                    />
                </div>
                <div className="advancedGameMiddleContainer">
                    <GameBoard
                    componentName={'ring'}
                    source={'advanced'}
                    />
                    <GameBoard
                    componentName={'paper'}
                    source={'advanced'}
                    />
                </div>
                <div className="advancedGameLowerContainer">
                    <GameBoard
                    componentName={'stick'}
                    source={'advanced'}
                    />
                    <GameBoard
                    componentName={'rock'}
                    source={'advanced'}
                    />
                </div>
            </div>
            </Fade>
       </div>
    );
}

export default AdvancedGame;
