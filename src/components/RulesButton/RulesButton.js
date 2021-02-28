import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
import RulesImage from "../../assets/images/rules.png";
import "./RulesButton.css";

class RulesButton extends Component {
  state = {
    modal14: false,
  };

  toggle = (nr) => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };

  render() {
    return (
      <MDBContainer>
        <MDBBtn color="orange" onClick={this.toggle(14)}>
          Rules
        </MDBBtn>
        <MDBModal
          overflowScroll={false}
          isOpen={this.state.modal14}
          toggle={this.toggle(14)}
          centered
        >
          <MDBModalHeader toggle={this.toggle(14)}>
            Rules & Hotkeys
          </MDBModalHeader>
          <MDBModalBody className="text-center">
            <img
              src={RulesImage}
              className="basicRulesImage"
              alt={"basicRulesImage"}
            />{" "}
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="orange" onClick={this.toggle(14)}>
              Close
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default RulesButton;
