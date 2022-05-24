import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

const FormDropdown = (props) => {
  const [error, setError] = useState('');
  const renderedOptions = [
    { id: "-1", name: "Please Select" },
    ...props.data,
  ].map((o) => {
  
    return props.defaultValue == o.id ? <option value={o.id} selected={true}>{o.name}</option> : <option value={o.id}>{o.name}</option>;
  });

  const onDropDownChange = (event) =>{
    event.preventDefault();
    props.selectedValue(event.target.value);
    if(event.target.value == -1)
      setError(`Please select a ${props.name}`);
    else{
      setError('');
    }
}

  return (
    <>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          {props.label}
        </Form.Label>
        <Col sm="10">
          
          <select key={props.key} className="form-control" onChange={onDropDownChange} disabled={props.disabled}>{renderedOptions}</select>
          <span className="text-danger">{error}</span>
        </Col>
      </Form.Group>
    </>
  );
};

export default FormDropdown;
