import React from 'react'
import { Row, Col, Card, Form, Button, FormControl} from "react-bootstrap";
import AdminMenu from "../ui/AdminMenu";
import PageBreadcrum from "../ui/PageBreadCrum";

function OnlineLecture() {

    const breadcrums = [
        { link: "/home", label: "Home" },
        { link: "/online lecture", label: "Online Lectures" },
    ];

  return (
    <>
            <Row className="mt-2 mb-2">
                <Col md={2}>
                    <AdminMenu activelink="Online Lectures" />
                </Col>
                <Col md={10}>
                    <Card className="mt-5">
                        <Card.Body>
                            <Row>
                                <Col>
                                    <PageBreadcrum items={breadcrums} />
                                    <h3 className="mt-4">Online Lectures</h3>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
                        </>
  )
}

export default OnlineLecture