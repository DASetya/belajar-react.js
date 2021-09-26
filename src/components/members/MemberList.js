import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import MemberComponent from "./MemberComponent";
import { Link } from "react-router-dom";
import { getListMember, deleteMember } from "../../api/MemberService";
import ModalComponent from "../modal/ModalComponent";

const MemberList = (match) => {

  const {path} = match;

  const [members, setMembers] = useState([]); 

  const [modalShow, setModalShow] = useState ({
    show: false,
    id: null
  }); 


  useEffect(() => {
    getListMember()
    .then((response) => {
      console.log('Data: ',response.data)
      setMembers(response.data)
    })
  }, [members])

  
  const loadData = () => {
    getListMember()
    .then((response)=> {
      console.log(response.data);
      setMembers(response.data)
    })
  }

  const handleDelete = (id) => {
    setModalShow({
      show: true,
      id
    })
  }

  const handleDeleteTrue = () => {
    if(modalShow.show && modalShow.id){
      memberDelete(modalShow.id)
      setModalShow({
        show: false,
        id: null
      })
    }
  }

  const memberDelete = (id) => {
    return deleteMember(id)
    .then (response => {    
      loadData();
  })
}
  
  return (
    <section className="py-5 container mt-5"> 
    <h3>Member Page</h3>
    <Link to= "/members/add" className="btn btn-sm btn-success mb-3 text-uppercase">Add Member</Link>
  
      <Row>
        {
        members.map((member) => (
          <MemberComponent
            key={member.id}
            memberId={member.id}
            firstName={member.firstName}
            lastName={member.lastName}
            email= {member.email}
            password={member.password}
            status={member.status}
            path={path}
            variant={"primary"}
            handleDelete={handleDelete}
          />
        ))}
        {
          members && !members.length && <h4> No Display</h4>
        }
      </Row>

          {
            modalShow.show && (
                <ModalComponent
                show={modalShow}
                handleDeleteTrue={handleDeleteTrue}
                onHide= {() => setModalShow(false)}
                />
            )
          }
        
      </section>
  );
} 
export default MemberList;
