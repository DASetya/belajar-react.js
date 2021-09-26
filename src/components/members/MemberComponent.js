import React from "react";
import { Card, Col, ButtonGroup, Button } from "react-bootstrap";
import './MemberComponent.css'
import { Link } from "react-router-dom";
const MemberComponent = ({memberId,firstName, lastName, username, email, password, status,handleDelete}) => {
  if (status==1) {
    return (
      <Col lg={3} md={6}>
        <Card className="member-card-css text-center my-2">
          <Card.Header>
            {firstName} {lastName}
          </Card.Header>
          <Card.Body>
            <Card.Title>{firstName}</Card.Title>
            <Card.Text>{lastName}</Card.Text>
            <Card.Text>{username}</Card.Text>
            <Card.Text>{email}</Card.Text>
            <Card.Text>{password}</Card.Text>
            <Card.Text>{status}</Card.Text>
          </Card.Body>
          <ButtonGroup aria-label="Basic example">
                      {status <1 || status === null? 
                      <button
                      onClick={() =>handleDelete(memberId)}
                      className="btn btn-sm btn-outline-danger"
                      disabled={true} 
                      >
                      Delete
                      </button>:
                      <button
                      onClick={() =>handleDelete(memberId)}
                      className="btn btn-sm btn-outline-danger"
                      >
                      Delete  
                      </button>
                      }
                  </ButtonGroup>
        </Card>
      </Col>
    );    
  } else {
    return(
      <div></div>
    );
  }
};

export default MemberComponent;
