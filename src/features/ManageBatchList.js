import React, { useEffect, useState } from 'react'
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Row, Col, Button, Card, Form, FormControl, Table } from 'react-bootstrap'
import AdminMenu from '../ui/AdminMenu'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageBreadcrum from '../ui/PageBreadCrum'
import { Link } from 'react-router-dom'
import "../ui/ui.module.css";
import axios from 'axios';

export default function ManageBatchList(props) {
    const [batches, setBatches] = useState([])

    useEffect(() => {
        loadBatch();
    }, [])

    const loadBatch = async () => {
        const result = await axios.get("http://127.0.0.1:8000/api/manage-batches/")
        console.log(result);
        setBatches(result.data);
    }

    const breadcrums = [

        { link: "/home", label: "Home" },
        { link: "/manage-batches", label: "Manage Batch", cssClass: "activelink" },
    ]
    return (
        <>
            <Row className="mt-2 mb-2">
                <Col md={2}>
                    <AdminMenu activelink="Manage Batches" />
                </Col>

                <Col md={10}>
                    <Card className='mt-5'>
                        <Card.Body>
                            <Row>
                                <Form className="d-flex">
                                    <FormControl
                                        type="search"
                                        // value={q}
                                        // onChange={(e) => setQ(e.target.value)}
                                        placeholder="Search"
                                        style={{ width: "40%", marginLeft: "25%" }}
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success"><FontAwesomeIcon icon={faSearch} /></Button>
                                </Form>
                                <Col className='mt-2'>
                                    <PageBreadcrum items={breadcrums} />
                                    <h3 className='mt-4'>Manage Batches</h3>
                                </Col>
                            </Row>
                            <div>
                                <Link eventKey={1} to="/manage-batch/add-batch" className="btn btn-info no-border" style={{ float: "right", marginBottom: "5px" }}>
                                    Add New Batch <FontAwesomeIcon icon={faPlus} /></Link>
                            </div>
                            {/* <div className="table" style={{ backgroundColor: "whitesmoke" }}>
                                <DataTable
                                    columns={column}
                                    data={batches}
                                />
                            </div> */}
                            <Table class="table shadow">
                                <thead>
                                    <tr>
                                        <th>Batch Name</th>
                                        <th>Batch For</th>
                                        <th>Start Date</th>
                                        <th>End Date</th>
                                        <th>License Key</th>
                                        <th>Actions</th>
                                    </tr>

                                </thead>
                                <tbody>
                                    {
                                        batches.map((item) => (
                                            <tr>
                                                <td>{item.batchName}</td>
                                                <td>{item.batchFor}</td>
                                                <td>{item.startDate}</td>
                                                <td>{item.endDate}</td>
                                                <td>{item.licenseKey}</td>
                                                <td>
                                                    <Link class="btn btn-primary">Edit</Link>
                                                    <Link class="btn btn-outline-primary">Move</Link>
                                                    <Link class="btn btn-danger">Delete</Link>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}
