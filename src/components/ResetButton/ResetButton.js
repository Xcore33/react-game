import React from "react";
import { MDBBtn, MDBContainer } from "mdbreact";

function ResetButton(props) {
  return (
    <MDBContainer>
      <MDBBtn
        color="orange"
        onClick={() => props.updateGamerScore(0, "update")}
      >
        Reset
      </MDBBtn>
    </MDBContainer>
  );
}

export default ResetButton;
