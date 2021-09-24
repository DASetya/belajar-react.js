import React from "react";
import { Modal, Button } from "react-bootstrap";

const ModalComponent = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Book Delete Confirm
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Sure delete?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.handleDeleteTrue} className="btn btn-danger" >Delete</Button>
        <Button onClick={props.onHide} >Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;
