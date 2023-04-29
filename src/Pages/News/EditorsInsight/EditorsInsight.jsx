import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import first from "../../../assets/1.png";
import second from "../../../assets/2.png";
import third from "../../../assets/3.png";
import { FaRegCalendar } from "react-icons/fa";

const EditorsInsight = () => {
  return (
    <div className="mt-4">
      <h2 className="mb-4">Editors Insight</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        <Col>
          <Card className="border-0">
            <Card.Img variant="top" src={first} />
            <Card.Body className="p-0 mt-3">
              <Card.Title>
                21 The Most Stylish Wedding Guest Dresses For Spring
              </Card.Title>

              <Card.Footer className="text-muted bg-white d-inline-flex align-items-center gap-2 border-0 p-0">
                <FaRegCalendar></FaRegCalendar>
                <span>Jan 4, 2023</span>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="border-0">
            <Card.Img variant="top" src={second} />
            <Card.Body className="p-0 mt-3">
              <Card.Title>
                21 The Most Stylish Wedding Guest Dresses For Spring
              </Card.Title>

              <Card.Footer className="text-muted bg-white d-inline-flex align-items-center gap-2 border-0 p-0">
                <FaRegCalendar></FaRegCalendar>
                <span>Jan 4, 2023</span>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="border-0">
            <Card.Img variant="top" src={third} />
            <Card.Body className="p-0 mt-3">
              <Card.Title>
                21 The Most Stylish Wedding Guest Dresses For Spring
              </Card.Title>

              <Card.Footer className="text-muted bg-white d-inline-flex align-items-center gap-2 border-0 p-0">
                <FaRegCalendar></FaRegCalendar>
                <span>Jan 4, 2023</span>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default EditorsInsight;
