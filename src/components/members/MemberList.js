import React from "react";
import { Container, Row } from "react-bootstrap";
import MemberComponent from "./MemberComponent";

const MemberList = ({ dataMembers }) => {
  return (
    <Container>
      <Row>
        {dataMembers.map((member) => (
          <MemberComponent
            key={member.id}
            firstName={member.firstName}
            lastName={member.lastName}
            username={member.username}
            email={member.email}
            password={member.password}
            variant="info"
          />
        ))}
      </Row>
    </Container>
  );
};
export default MemberList;
