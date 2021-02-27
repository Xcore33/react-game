import React from "react";
import "./RulesButton.css";
import Rules from "../../assets/images/rules.png";
function RulesButton(props) {
  const renderRules = () => {
    return (
      <div className="rulesImageContainer hv-center">
        <img
          src={Rules}
          className="rulesImage"
          alt={"rulesImage"}
        />
      </div>
    );
  };
  return (
    <div className={"col-4  d-flex justify-content-center"}>
      <button
        type="button"
        className="btn lowerButton"
        data-toggle="modal"
        data-target="#rulesModal"
      >
        <i className={"fa fa-file-text mr-1"} aria-hidden="true"></i>
        RULES
      </button>
      <div
        className="modal fade"
        id="rulesModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="rulesModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content modalContainer">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Rules
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body modalBodyContainer hv-center">
              {renderRules()}
            </div>
            <div className="modal-footer hv-center">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RulesButton;
