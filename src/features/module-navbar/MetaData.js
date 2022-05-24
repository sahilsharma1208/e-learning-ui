import React from 'react'
import { Card, Row, Col, Form, FloatingLabel } from 'react-bootstrap'

export default function MetaData() {

  return (
    <>
        <Row>
        <Col md={3}>
        <h5 style={{ marginTop: "20px" }}>Module Thumbnail</h5>
        <div className="thumbnail">
          <img src="" alt="" />
        </div>
        </Col>  

        <Col md={9}>
        <h5 style={{ marginTop: "20px" }}>Module Overview</h5>
        <textarea style={{ height: "154px" }} class="form-control" id="exampleFormControlTextarea1" disabled></textarea>
          </Col>  
          </Row>

          <Form>
              <Row className="mb-3 mt-4">
                  <Form.Group as={Col} md="4">
                      <Form.Label>Module Level</Form.Label>
                      <Form.Select>
                          <option>Module Level</option>
                          <option>Module Level</option>
                          <option>Module Level</option>
                      </Form.Select>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="formGridState">
                    <Form.Label>Semester</Form.Label>
                    <Form.Select defaultValue="Choose...">
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="formGridState">
                    <Form.Label>Table of Content</Form.Label>
                    <Form.Select defaultValue="Choose...">
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Select>
                  </Form.Group>
              </Row>
              <Row className="mb-3 mt-4">
                  <Form.Group as={Col} md="4">
                      <Form.Label>Department</Form.Label>
                      <Form.Select>
                          <option>Department</option>
                          <option>Department</option>
                          <option>Department</option>
                      </Form.Select>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="formGridState">
                    <Form.Label>Assign Batches</Form.Label>
                    <Form.Select defaultValue="Choose...">
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Select>
                  </Form.Group>
              </Row>

              <Form.Group className="mb-3">
                <Form.Check
                  label="Linear Topic Completion"
                />
              </Form.Group>
          </Form>
    </>
  )
}
