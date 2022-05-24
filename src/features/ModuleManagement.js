import React, { useEffect, useState } from "react";
import { Row, Col, Card, Form, Button, FormControl } from "react-bootstrap";
import { getModuleNames } from "../services/management.service";
import AdminMenu from "../ui/AdminMenu";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import PageBreadcrum from "../ui/PageBreadCrum";

export default function ModuleManagement(props) {

    const [moduleName, setModuleName] = useState([]);
    const [name, setName] = useState([]);
    const [q, setQ] = useState("")

    function search(rows) {
        return rows.filter((row) => row.loginName.toLowerCase().indexOf(q) > -1);
    }

    useEffect(() => {
        getModuleNames().then((response) => {
            // console.log(response)
            setModuleName(response);
        })
    })

    const breadcrums = [
        { link: "/home", label: "Home" },
        { link: "/module-management", label: "Module Management" },
    ];
    return (
        <>
            <Row className="mt-2 mb-2">
                <Col md={2}>
                    <AdminMenu activelink="Module Management" />
                </Col>
                <Col md={10}>
                    <Card className="mt-5">
                        <Card.Body>
                            <Row>
                            <Form className="d-flex mb-2">
                                <FormControl
                                type="search"
                                value={q}
                                onChange={(e) => setQ(e.target.value)}
                                placeholder="Search"
                                style={{ width: "40%", marginLeft: "25%"}}
                                className="me-2"
                                aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                                <Col>
                                    <PageBreadcrum items={breadcrums} />
                                    <h3 className="mt-4">Module Management</h3>
                                </Col>
                            </Row>
                            <Row className="mb-3 mt-2">
                                <Form.Group as={Col} md="2" controlId="validationCustom01">
                                    <Form.Label>Course Level</Form.Label>
                                    <Form.Select size="sm">
                                        <option>Organization 1</option>
                                        <option>Organization 2</option>
                                        <option>Organization 3</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col} md="2" controlId="validationCustom02">
                                    <Form.Label>Department</Form.Label>
                                    <Form.Select size="sm">
                                        <option>Institute 1</option>
                                        <option>Institute 2</option>
                                        <option>Institute 3</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col} md="2">
                                    <Form.Label>Semester</Form.Label>
                                    <Form.Select size="sm">
                                        <option>Semester 2</option>
                                        <option>Semester 3</option>
                                        <option>Semester 1</option>
                                    </Form.Select>
                                </Form.Group>
                                <Col>
                                    <Button
                                        type="button"
                                        size="sm"
                                        style={{ marginTop: "30px" }}
                                        // onClick={editHandler}
                                        variant="info"
                                    >
                                        Apply Filter
                                    </Button>
                                </Col>
                                <Row className="mt-5">
                                    {
                                        moduleName.map((item) => {
                                            return (
                                                <Col md={3}>
                                                <Card style={{ width: "18rem", height: "15rem", textAlign: "center" }}>
                                                    <Card.Img variant="top" src="" />
                                                    <Card.Body>
                                                        <Card.Title>{item.name}</Card.Title>
                                                        <div style={{ marginTop: "50%"}}>
                                                            <Link eventKey={1} to="/module-management/modules" className="btn btn-info no-border">
                                                                Open </Link>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            )
                                        })
                                    }
                                    {/* <Col md={3}>
                                        <Card style={{ width: "18rem", height: "15rem", textAlign: "center" }}>
                                            <Card.Img variant="top" src="" />
                                            <Card.Body>
                                                <Card.Title>Card Title</Card.Title>
                                                <Button variant="primary" size="sm" style={{ marginTop: "55%"}}>View</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={3}>
                                        <Card style={{ width: "18rem", height: "15rem", textAlign: "center" }}>
                                            <Card.Img variant="top" src="" />
                                            <Card.Body>
                                                    {
                                                        moduleName.map((item) => (
                                                            <Card.Title>{item.name}</Card.Title>
                                                        ))
                                                    }
                                                <Button variant="primary" size="sm" style={{ marginTop: "55%"}}>View</Button>
                                            </Card.Body>
                                            
                                        </Card>
                                    </Col> */}
                                </Row>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
}
