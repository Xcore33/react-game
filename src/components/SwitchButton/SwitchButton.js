import React from "react";
import { MDBBtn, MDBContainer } from "mdbreact";
import { withRouter } from "react-router-dom";

function SwitchButton(props) {
  const switchText = props.gameType === "basic" ? "advanced" : "basic";
  const switchIconClass =
    props.gameType === "basic"
      ? "fa-caret-square-o-up"
      : "fa-caret-square-o-down";
  const changeGameMode = () => {
    props.switchGameMode(switchText);
    props.updateUserScore(0, "switch");
    props.history.push(`/${switchText}`);
  };
  return (
    <MDBContainer>
      <MDBBtn color="orange" onClick={() => changeGameMode()}>
        <div className="hv-center">
          <i className={`fa ${switchIconClass} mr-1`} aria-hidden="true"></i>
          <span>{switchText}</span>{" "}
        </div>
      </MDBBtn>
    </MDBContainer>
  );
}

export default withRouter(SwitchButton);
