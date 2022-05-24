import React, { useEffect, useState} from 'react'
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Row, Col, Button, Card, Form, FormControl } from 'react-bootstrap'
import AdminMenu from '../ui/AdminMenu'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageBreadcrum from '../ui/PageBreadCrum'
import { Link } from 'react-router-dom'
import { getTrainees } from '../services/management.service'
import DataTable from 'react-data-table-component'
import ActionButtons from '../ui/ActionButtons'
import "../ui/ui.module.css";

export default function TraineeManagementDetails(props) {
    const [trainees, setTrainees] = useState([])
    const [column, setColumn] = useState([])
    const [q, setQ] = useState("")

    useEffect(() => {
        getTrainees().then((response) => {
            setColumn([
                {
                    name: "S.No",
                    selector: "id",
                    sortable: true,
                },
                {
                    name: "First Name",
                    selector: "firstName",
                    sortable: true,
                    right: true,
                },
                {
                    name: "Last Name",
                    selector: "lastName",
                    sortable: true,
                    right: true,
                },
                {
                    name: "Login Name",
                    selector: "loginName",
                    sortable: true,
                    right: true,
                },
                {
                    name: "Department",
                    selector: "department",
                    sortable: true,
                    right: true,
                },
                {
                    name: "Section",
                    selector: "section",
                    sortable: true,
                    right: true,
                },
                {
                    name: 'Actions',
                    cell: (row) => <ActionButtons title="Edit" edit={{ link: '/trainee-management', id: row.id }}  />
        
                },
            ]);
            setTrainees(formatData(response));
        });
    }, []);

    const formatData =(data) => {

        return data.map(b=>{
            return {
                id: b.id,
                firstName: b.firstName,
                lastName: b.lastName,
                loginName: b.loginName,
                department: b.department,
                section: b.section,
            }
        })
    
      }

      function search(rows) {
        return rows.filter((row) => row.loginName.toLowerCase().indexOf(q) > -1);
    }

    const breadcrums = [

        { link: "/home", label: "Home" },
        { link: "/trainee-managements", label: "Trainee Management", cssClass: "activelink" },
    ]
    return (
        <>
            <Row className="mt-2 mb-2">
                <Col md={2}>
                    <AdminMenu activelink="Trainee Management" />
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
                                <Button variant="outline-success"><FontAwesomeIcon icon={faSearch}/></Button>
                            </Form>
                                <Col className='mt-2'>
                                    <PageBreadcrum items={breadcrums} />
                                    <h3 className='mt-4'>Trainees</h3>
                                </Col>
                            </Row>
                            <div>
                                <Link eventKey={1} to="/trainee-management/add-trainee" className="btn btn-info no-border">
                                    Add Trainer <FontAwesomeIcon icon={faPlus} /></Link>
                            </div>
                            <div className="table" style={{ backgroundColor: "whitesmoke" }}>
                                <DataTable
                                    columns={column}
                                    data={search(trainees)}
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}
