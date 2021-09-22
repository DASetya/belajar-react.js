import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import MemberForm from "./MemberForm";
import MemberList from "./MemberList";

const Members = () => {
  const [getMembers, setMembers] = useState([{
    id: 1,
    firstName: "Dimas",
    lastName: "Arif",
    username: "dasetya",
    email: "dimasarifsetyawan@gmail.com",
    password: "default"
  }]);
  const eventCreateMember = (member) => {
    setMembers(getMembers.concat(member));
    console.log(getMembers);
  };
  return (
    <Container>
      <Row>
        <MemberForm onCreateMember={eventCreateMember} />
      </Row>

      <Row>
        <MemberList dataMembers={getMembers} />
      </Row>
    </Container>
  );
};
export default Members;
