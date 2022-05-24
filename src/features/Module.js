import React, { useState } from 'react'
import { Row, Col, Card, Tab, Tabs } from 'react-bootstrap'
import AdminMenu from '../ui/AdminMenu'
import Assessment from './module-navbar/Assessment';
import Assignment from './module-navbar/Assignment';
import IntroductoryVideo from './module-navbar/IntroductoryVideo';
import MetaData from './module-navbar/MetaData';
import TableOfContent from './module-navbar/TableOfContent';
import UploadContent from './module-navbar/UploadContent';

function Module() {

    const [key, setKey] = useState('/module-mnagement');

    return (
        <>
            <Row className=" mb-2">
                <Col md={2}>
                    <AdminMenu activelink="Module Management" />
                </Col>

                <Col md={10}>
                    <Card className='mt-5'>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <h3 className='mt-2'>Module Management</h3>
                                </Col>
                            </Row>

                            <Tabs
                                id="controlled-tab-example"
                                activeKey={key}
                                onSelect={(k) => setKey(k)}
                                className="mb-3"
                            >
                                <Tab eventKey="/meta-data" title="MetaData">
                                    <MetaData />
                                </Tab>
                                <Tab eventKey="/introductory-video" title="Introductory Video">
                                    <IntroductoryVideo />
                                </Tab>
                                <Tab eventKey="/table=of-content" title="Table of Content">
                                    <TableOfContent />
                                </Tab>
                                <Tab eventKey="/upload-content" title="Upload Content">
                                    <UploadContent />
                                </Tab>
                                <Tab eventKey="/assessment" title="Assessment">
                                    <Assessment />
                                </Tab>
                                <Tab eventKey="/assignnment" title="Assignment">
                                    <Assignment />
                                </Tab>
                            </Tabs>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Module;