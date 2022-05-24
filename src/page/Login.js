import React from "react";
import "../App.js"
import { Button, Form, Row, Col } from "react-bootstrap"
import "./Login.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
    return (
        <div className="login" style={{ width: "30%", margin: "auto"}}>
            <div className="page">
                <React.Fragment>
                    <Row>
                        <Col sm={{ span: 5, offset: 3 }} className="login mb-2 mt-2" >
                            <Button
                                style={{ border: "none", backgroundColor: "#eeeef1", color: "#6b6963", fontSize: "20px", textAlign: "left" }}

                            >Trainee Login</Button>
                            <hr />
                            <Form>
                                <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Login <FontAwesomeIcon icon={faSignInAlt} />
                                </Button>

                            </Form>
                        </Col>
                    </Row>

                </React.Fragment>
            </div>
        </div>
    );
}
