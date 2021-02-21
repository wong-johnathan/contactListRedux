import CardSection from "components/CardSection";
import ComponentTitle from "components/ComponentTitle";
import Inputs from "components/Inputs";
import Spacer from "components/Spacer";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button, Col, Form, Row } from "reactstrap";
import { createUser, updateUser } from "store/actions/users";

const inputs = [
  { type: "text", id: "name", placeholder: "Name", label: "Name" },
  { type: "text", id: "phone", placeholder: "Phone", label: "Phone" },
  {
    type: "radio",
    id: "gender",
    placeholder: "Gender",
    label: "Gender",
    options: [
      { text: "Male", id: "male" },
      { text: "Female", id: "female" },
      { text: "Others", id: "others" },
    ],
  },
];

const EditContact = ({ match, history }) => {
  const users = useSelector(({ users }) => users);
  const dispatch = useDispatch();

  useEffect(() => {
    if (match.params.id !== "new") {
      const user = users.find((user) => String(user._id) === match.params.id);
      if (user) return setFields(user);
    }
  }, [match.params.id, dispatch, history, users]);

  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});
  const updateFields = (e) => setFields({ ...fields, [e.target.id]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    let errors = {};
    if (!fields.phone.match(/(8|9|6)\d{7}$/)) errors.phone = "Invalid Phone number";
    if (Object.keys(errors).length > 0) return setErrors(errors);
    setErrors(errors);
    if (match.params.id === "new") dispatch(createUser(fields)).then(({ status }) => status && history.push("/"));
    else dispatch(updateUser(fields)).then(({ status }) => status && history.push("/"));
  };

  return (
    <>
      <ComponentTitle title={match.params.id.includes("new") ? "New Contact" : "Edit Contact"} />
      <Spacer />
      <CardSection title='Contact Information'>
        <Form onSubmit={onSubmit}>
          <Row>
            {inputs.map(({ type, id, placeholder, label, options }) => (
              <Col key={id} xs='12' md='4'>
                <Inputs type={type} id={id} placeholder={placeholder} label={label} options={options} updateState={updateFields} value={fields[id]} error={errors[id]} />
              </Col>
            ))}
          </Row>
          <Row>
            <Col xs='12' md='auto'>
              <Button block color='primary'>
                Save
              </Button>
            </Col>
          </Row>
        </Form>
      </CardSection>
    </>
  );
};

export default withRouter(EditContact);
