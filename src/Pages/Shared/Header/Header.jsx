import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <Container className="mt-4">
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM DD, YYYY")}</p>
      </div>
      <div className="d-flex">
        <Button variant="danger">Latest</Button>
        <Marquee className="text-danger" pauseOnHover={true} speed={50}>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
    </Container>
  );
};

export default Header;
