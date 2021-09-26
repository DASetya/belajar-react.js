import React, { useState, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import { createMember } from "../../api/MemberService";
import { memberSchema } from "../validations/validationSchema";
import { Link } from "react-router-dom";

const MemberForm = ({history, match}) => {
  const { id } = match.params;

  const [member, setMember] = useState({});

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(memberSchema) });

  const submitForm = (data) => {
    return insert(data);
  };

  const insert = (data) => {
    return createMember(data).then((response) => {
      history.push(".");
    });
  };
  return (
    <section className="py-5 container p-4 mb-5">
      <Row className="col-lg-12">
        <Card className="p-4 shadow-lg">
          <h3>Member Form Component</h3>
          <Form onSubmit={handleSubmit(submitForm)}>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                name="firstName"
                {...register("firstName")}
                className={`form-control ${
                  errors.firstName ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">
                {errors.firstName?.message}
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                name="lastName"
                {...register("lastName")}
                className={`form-control ${
                  errors.lastName ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">{errors.lastName?.message}</div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                name="username"
                {...register("username")}
                className={`form-control ${
                  errors.username ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">{errors.username?.message}</div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                {...register("email")}
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
              />
              <div className="invalid-feedback">{errors.email?.message}</div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                name="password"
                {...register("password")}
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">{errors.password?.message}</div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicStatus">
              <Form.Label>Status</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Status 0 for inactive and 1 for active"
                name="status"
                {...register("status")}
                className={`form-control ${
                  errors.status ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">{errors.status?.message}</div>
            </Form.Group>

            <Button variant="success" type="submit">
              Save
            </Button>
            <Link to="/members" className="btn btn-warning mx-2">
              Cancel
            </Link>
          </Form>
        </Card>
      </Row>
    </section>
  );
};
export default MemberForm;
