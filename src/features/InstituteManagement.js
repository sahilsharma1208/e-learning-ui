import React, { useEffect, useState } from 'react'
import "../App.css"
import { Row, Col, Card, Button, FormControl, Form } from 'react-bootstrap'
import AdminMenu from '../ui/AdminMenu'
import { Table } from 'react-bootstrap'
import PageBreadcrum from '../ui/PageBreadCrum'
import { getInstitutes } from '../services/management.service'
import DataTable from 'react-data-table-component'

export default function InstituteManagement() {

    const [institute, setInstitute] = useState([])
    const [institutes, setInstitutes] = useState([])
    const [column, setColumn] = useState([])
    const [q, setQ] = useState("")

    useEffect(() => {
        getInstitutes().then((response) => {
            console.log(response);
            setInstitute(response);
        })
    }, [])

    useEffect(() => {
        getInstitutes().then((response) => {
            setColumn([
                {
                    name: "S.No",
                    selector: "id",
                    sortable: true,
                },
                {
                    name: "Zone",
                    selector: "zone",
                    sortable: true,
                    right: true,
                },
                {
                    name: "Range",
                    selector: "range",
                    sortable: true,
                    right: true,
                },
                {
                    name: "Institute",
                    selector: "institute",
                    sortable: true,
                    right: true,
                },
                {
                    name: "Batches",
                    selector: "batch",
                    sortable: true,
                    right: true,
                },
                {
                    name: "Trainer",
                    selector: "trainer",
                    sortable: true,
                    right: true,
                },
                {
                    name: "Trainee",
                    selector: "trainee",
                    sortable: true,
                    right: true,
                },
                // {
                //     name: 'Actions',
                //     cell: (row) => <ActionButtons title="Edit" edit={{ link: '/admin/unit', id: row.id }}  />
                // },
            ]);
            setInstitutes(formatData(response));
        });
    }, []);

    const formatData =(data) => {

        return data.map(b=>{
            return {
                id: b.id,
                zone: b.zone,
                range: b.range,
                institute: b.institute,
                batches: b.batch,
                trainer: b.trainer,
                trainee: b.trainee,
            }
        })
    
      }

    function search(rows) {
        return rows.filter((row) => row.institute.toLowerCase().indexOf(q) > -1);
    }

const breadcrums = [

    { link: "/home", label: "Home" },
    { link: "/institute-management", label: "Institute Management" },
]
return (
    <>
        <Row className="mt-2 mb-2">
            <Col md={2}>
                <AdminMenu activelink="Institute Management" />
            </Col>

            <Col md={10}>
                <Card className='mt-5'>
                    <Card.Body>
                        <Row>
                        <Form className="d-flex">
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
                            <Col className='mt-2'>
                                <PageBreadcrum items={breadcrums} />
                                <h3 className='mt-4'>Institutes</h3>
                            </Col>
                        </Row>
                        <div className="table" style={{ backgroundColor: "whitesmoke" }}>
                            <DataTable hover
                                columns={column}
                                data={search(institute)}
                            />
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </>
)
}
