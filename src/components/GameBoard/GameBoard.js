import React from "react";
import "./GameBoard.css";
import paperIcon from "../../assets/images/paper.png";
import scissorsIcon from "../../assets/images/scissors.png";
import rockIcon from "../../assets/images/rock.png";
import ringIcon from "../../assets/images/ring.png";
import stickIcon from "../../assets/images/stick.png";
import { withRouter } from "react-router-dom";
import Roll from "react-reveal/Roll";

function GameBoard(props) {
  const returnImageComponent = (component) => {
    switch (component) {
      case "paper":
        return (
          <img
            src={paperIcon}
            className={`circleIcon ${props.source}`}
            alt={"paper"}
          />
        );

      case "scissor":
        return (
          <img
            src={scissorsIcon}
            className={`circleIcon ${props.source}`}
            alt={"scissor"}
          />
        );

      case "rock":
        return (
          <img
            src={rockIcon}
            className={`circleIcon ${props.source}`}
            alt={"rock"}
          />
        );

      case "ring":
        return (
          <img
            src={ringIcon}
            className={`circleIcon ${props.source}`}
            alt={"ring"}
          />
        );

      case "stick":
        return (
          <img
            src={stickIcon}
            className={`circleIcon ${props.source}`}
            alt={"stick"}
          />
        );

      default:
        return null;
    }
  };

  const redirectToChoice = () => {
    props.history.push({
      pathname: "/basic/choice",
      state: { gamerChoice: props.componentName, gameType: props.source },
    });
  };
  const outerCircleClass = `outerCircle ${props.componentName} ${props.source} hv-center`;
  let innerCircleClass = `innerCircle ${props.source} hv-center`;
  if (props.componentName === "empty") {
    innerCircleClass += ` empty`;
  }
  return (
    <Roll bottom delay={500}>
      <div className={outerCircleClass} onClick={() => redirectToChoice()}>
        <div className={innerCircleClass}>
          {returnImageComponent(props.componentName)}
        </div>
      </div>
    </Roll>
  );
}

export default withRouter(GameBoard);
