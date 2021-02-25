import React from "react";
import "./Footer.css";
import { MDBContainer, MDBFooter } from "mdbreact";
import RSLogo from "../../assets/svg/rs_school_js.svg";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-2" id="footer">
      <li className="list-unstyled">
        <a href="https://rs.school/js/">
          <img className="rsLogo" src={RSLogo} alt={"logo"} />
        </a>
      </li>

      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Author:{" "}
          <a href="https://github.com/Xcore33/"> Xcore33 </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
