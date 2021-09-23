import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import MemberComponent from "./MemberComponent";
import { Link } from "react-router-dom";

const MemberList = ({ dataMembers }) => {
  const [members, setMembers] = useState([
    {
      id: 1,
      firstName: "Dimas",
      lastName: "Arif",
      username: "dasetya",
      email: "dimasarifsetyawan@gmail.com",
      password: "default",
    },
  ]);
  return (
    <section className="py-5 container mt-5">
      <h3>Member Page</h3>
      <Link to="/members/add" className="btn btn-sm btn-success mb-3 text-uppercase">
        add member
      </Link>
      <Row>
        {members.map((member) => (
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
    </section>
  );
};
export default MemberList;
