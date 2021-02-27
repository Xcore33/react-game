import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBCol, MDBRow } from
'mdbreact';

class RulesButton extends Component {
state = {
  modal16: false
}

toggle = nr => () => {
  let modalNumber = 'modal' + nr
  this.setState({
    [modalNumber]: !this.state[modalNumber]
  });
}

render() {
  return (
      <MDBContainer>
        <MDBBtn onClick={this.toggle(16)}>Rules</MDBBtn>
        <MDBModal isOpen={this.state.modal16} toggle={this.toggle(16)}>
          <MDBModalHeader toggle={this.toggle(16)}>MDBModal title</MDBModalHeader>
          <MDBModalBody>
            <MDBContainer fluid className="text-white">
              <MDBRow>
                <MDBCol md="4" className="bg-info">.col-md-4</MDBCol>
                <MDBCol md="4" className="ml-auto bg-info">.col-md-4 .ml-auto</MDBCol>
              </MDBRow>
              <br />
              <MDBRow>
                <MDBCol md="3" className="ml-auto bg-info">.col-md-3 .ml-auto</MDBCol>
                <MDBCol md="2" className="ml-auto bg-info">.col-md-2 .ml-auto</MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="6" className="ml-5 bg-info">.col-md-6 .ml-5</MDBCol>
              </MDBRow>
              <br />
              <MDBRow>
                <MDBCol sm="9" className="bg-info">
                  Level 1: .col-sm-9
                  <MDBRow>
                    <MDBCol sm="6" className="bg-info">
                      Level 2: .col-8 .col-sm-6
                    </MDBCol>
                    <MDBCol sm="6" className="bg-info">
                      Level 2: .col-4 .col-sm-6
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle(16)}>Close</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default RulesButton;
