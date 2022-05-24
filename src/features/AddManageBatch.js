import React from 'react'
import { useState } from 'react'
import PageBreadcrum from '../ui/PageBreadCrum'
import { Row, Col, Card, Form, Button } from 'react-bootstrap'
import AdminMenu from '../ui/AdminMenu'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

function AddManageBatch(props) {

    let history = useHistory();

    const [batch, setBatch] = useState({
        batchName: "",
        // batchFor: "",
        startDate: "",
        endDate: "",
        // licenseKey: ""
    });

    const {batchName, startDate, endDate } = batch;

    const onInputChange = e => {
        // console.log(e.target.value);
        setBatch({[e.target.name]: e.target.value})
    }

    const onSubmit = async (e) => {
        e.preventDefault(); 
        await axios.post('http://127.0.0.1:8000/api/manage-batches/', batch);
        history.push("/manage-batches")
    }

    const breadcrums = [

        { link: "/home", label: "Home" },
        { link: "/manage-batches", label: "Manage Batches" },
        { link: "/manage-batch/add-batch", label: "Add Batch", cssClass: "activelink"}
        // {
        //     link:
        //         props.match.params.id !== undefined
        //             ? "/manage-batch/" + props.match.params.id
        //             : "/manage-batches/add-batch",
        //     label: props.match.params.id !== undefined ? "Detail" : "Add Batch",
        //     cssClass: "activelink",
        // },
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
                                <Col>
                                    <PageBreadcrum items={breadcrums} />
                                    <h3 className='mt-4'>Manage Batch</h3>
                                </Col>
                            </Row>
                            <Form onSubmit={e => onSubmit(e)}>
                                <Row className="mb-3 mt-4">
                                    <Form.Group as={Col} md="4" >
                                        <Form.Label sm="2" >Batch Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Batch Name"
                                            name="batchName"
                                            value={batchName}
                                            onChange={e => onInputChange(e)}
                                        />
                                    </Form.Group>

                                    <Form.Group as={Col} md="4" onChange={onInputChange}>
                                        <Form.Label sm="2">Department</Form.Label>
                                        <Form.Select>
                                            <option>Organization 1</option>
                                            <option>Organization 2</option>
                                            <option>Organization 3</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group as={Col} md="4" >
                                        <Form.Label sm="2" >Start Date</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="YYYY-MM-DD"
                                            name="startDate"
                                            value={startDate}
                                            onChange={e => onInputChange(e)}
                                        />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3 mt-4">
                                    <Form.Group as={Col} md="4">
                                        <Form.Label>End Date</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="YYYY-MM-DD"
                                            name="endDate"
                                            value={endDate}
                                            onChange={e => onInputChange(e)}
                                        />
                                    </Form.Group>
                                </Row>
                                <Button type='submit' className='btn btn-primary btn-block'>Add Batch</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default AddManageBatch;