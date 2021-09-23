import React from "react";
import { Card, Col } from "react-bootstrap";
import './MemberComponent.css'
const MemberComponent = ({firstName, lastName, username, email, password}) => {
  return (
    <Col lg={3} md={6}>
      <Card className="member-card text-center mb-5">
        <Card.Header>{firstName} {lastName}</Card.Header>
        <Card.Body>
          <Card.Title>{firstName}</Card.Title>
          <Card.Text>{lastName}</Card.Text>
          <Card.Text>{username}</Card.Text>
          <Card.Text>{email}</Card.Text>
          <Card.Text>{password}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MemberComponent;
