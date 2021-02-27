import React from "react";

function ResetButton(props) {
  return (
    <div className="col-4  d-flex justify-content-center">
      <button
        type="button"
        className="btn lowerButton"
        onClick={() => props.updateGamerScore(0, "update")}
      >
        <div className="hv-center">
          <i className={"fa fa-refresh mr-1"} aria-hidden="true"></i>
          <span>RESET</span>
        </div>
      </button>
    </div>
  );
}

export default ResetButton;
