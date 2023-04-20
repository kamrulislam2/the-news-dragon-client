import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import QZone from "../QZone/QZone";
import bg from "../../../assets/bg.png";

const RightNav = () => {
  return (
    <div>
      <h2 className="mt-4">Login With</h2>
      <Button variant="outline-primary my-2">
        <FcGoogle /> Login with Google
      </Button>
      <Button variant="outline-secondary">
        <FaGithub /> Login with GitHub
      </Button>
      <div>
        <h4 className="mt-4">Find Us On</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter />
            Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram />
            Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>

      <div>
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
