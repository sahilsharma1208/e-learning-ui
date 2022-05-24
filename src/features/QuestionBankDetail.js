import React, { useEffect } from 'react'
import { useState } from 'react'
import PageBreadcrum from '../ui/PageBreadCrum'
import { Row, Col, Card, Form, Button } from 'react-bootstrap'
import AdminMenu from '../ui/AdminMenu'
import { getQuestionBank, updateQuestionBank, createQuestionBank } from '../services/management.service'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { getDefaultConfig } from '../helper/formcontrol.helper'
import {
    faCheckCircle,
    faEdit,
    faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function QuestionbankDetail(props) {
    const [question, setQuestion] = useState(0);
    const [questionDetail, setQuestionDetail] = useState({});
    const [organization, setOrganization] = useState(getDefaultConfig(""));
    const [name, setName] = useState(getDefaultConfig(""));
    const [language, setLanguage] = useState(getDefaultConfig(""));
    const [numOfQuestion, setNumOfQuestion] = useState(getDefaultConfig(""));
    const [mappingName, setMappingName] = useState(getDefaultConfig(""))
    const [isUpdate, setIsUpdate] = useState(false);
    const [institute, setInstitute] = useState([])
    const history = useHistory();

    useEffect(() => {
        if (props.match.params.id !== undefined) {
            getQuestionBank(props.match.params.id).then((response) => {
                setQuestion(response.id);
                setQuestionDetail(response);
                setName({ value: response.name, isError: false, ErrorMsg: "" });
                setLanguage({ value: response.language, isError: false, ErrorMsg: "" });
                setNumOfQuestion({ value: response.numOfQuestion, isError: false, ErrorMsg: "" });
                setMappingName({ value: response.pd, isError: false, ErrorMsg: "" });
            });
        }
    }, []);

    const submitHandler = (event) => {
        event.preventDefault();

        if (!(numOfQuestion.isError)) {
            if (props.match.params.id === undefined) {
                createQuestionBank({
                    name: name.value,
                    language: language.value,
                    numOfQuestion: numOfQuestion.value,
                    mappingName: mappingName.value,
                }).then((response) => {
                    if (response) {
                        history.push("/question-banks");
                    }
                });
            } else {
                // update the unit
                updateQuestionBank({
                    id: question,
                    name: name.value,
                    language: language.value,
                    numOfQuestion: numOfQuestion.value,
                    mappingName: mappingName.value,
                }).then((response) => {
                    if (response) {
                        history.push("/question-banks");
                    }
                });
            }
        }
    };

    const changeHandler = (event) => {
        if (event.target.name === "name") {
            if (event.target.value.length == 0) {
                setName((prevState) => {
                    return {
                        ...prevState,
                        value: event.target.value,
                        isError: true,
                        ErrorMsg: "First Name can not be empty.",
                    };
                });
            } else {
                setName((prevState) => {
                    return {
                        ...prevState,
                        value: event.target.value,
                        isError: false,
                        ErrorMsg: "",
                    };
                });
            }
        }

        if (event.target.name === "language") {
            if (event.target.value.length == 0) {
                setLanguage((prevState) => {
                    return {
                        ...prevState,
                        value: event.target.value,
                        isError: true,
                        ErrorMsg: "First Name can not be empty.",
                    };
                });
            } else {
                setLanguage((prevState) => {
                    return {
                        ...prevState,
                        value: event.target.value,
                        isError: false,
                        ErrorMsg: "",
                    };
                });
            }
        }

    if (event.target.name === "numOfQuestion") {
        if (event.target.value.length == 0) {
            setNumOfQuestion((prevState) => {
                return {
                    ...prevState,
                    value: event.target.value,
                    isError: true,
                    ErrorMsg: "Login Name can not be empty.",
                };
            });
        } else {
            setNumOfQuestion((prevState) => {
                return {
                    ...prevState,
                    value: event.target.value,
                    isError: false,
                    ErrorMsg: "",
                };
            });
        }
    };

    if (event.target.name === "pd") {
        if (event.target.value.length == 0) {
            setMappingName((prevState) => {
                return {
                    ...prevState,
                    value: event.target.value,
                    isError: true,
                    ErrorMsg: "Password can not be empty.",
                };
            });
        } else {
            setMappingName((prevState) => {
                return {
                    ...prevState,
                    value: event.target.value,
                    isError: false,
                    ErrorMsg: "",
                };
            });
        }
    };
}

    // const handleSubmit = (event) => {
    //     const form = event.currentTarget;
    //     if (form.checkValidity() === false) {
    //         event.preventDefault();
    //         event.stopPropagation();
    //     }

    //     setValidated(true);
    // };

    const cancelHandler = () => {
        setIsUpdate(false);
        setDefaultState();
    };

    const editHandler = () => {
        setIsUpdate(true);
        setIsUpdate(true);
        setDefaultState();
    };

    const setDefaultState = () => {
        setNumOfQuestion((prevState) => {
            return {
                ...prevState,
                value: questionDetail.name,
                isError: false,
                ErrorMsg: "",
            };
        });
    };

    const breadcrums = [

        { link: "/home", label: "Home" },
        { link: "/question-banks", label: "Question Bank" },
        // { link: "/question-management/add-question", label: "Add question" }
        {
            link:
                props.match.params.id !== undefined
                    ? "/question-bank/" + props.match.params.id
                    : "/question-banks/add-question",
            label: props.match.params.id !== undefined ? "Detail" : "Add question",
            cssClass: "activelink",
        },
    ]
    return (
        <>
            <Row className="mt-2 mb-2">
                <Col md={2}>
                    <AdminMenu activelink="Question Bank" />
                </Col>

                <Col md={10}>
                    <Card className='mt-5'>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <PageBreadcrum items={breadcrums} />
                                    <h3 className='mt-4'>New Question Bank</h3>
                                </Col>
                            </Row>
                            <Form onSubmit={submitHandler}>
                                <Row className="mb-3 mt-4">
                                <Form.Group as={Col} md="4" controlId="formPlainTextEmail">
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control
                                            type="text"
                                            onChange={changeHandler}
                                            // value={name.value}
                                            placeholder="Enter Title"
                                            name="title"
                                            disabled={
                                                props.match.params.id !== undefined && !isUpdate
                                                  ? "disabled"
                                                  : ""
                                              }
                                        />
                                        <span className="text-danger">{name.ErrorMsg}</span>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4">
                                        <Form.Label>Language</Form.Label>
                                        <Form.Select>
                                            <option>Language 1</option>
                                            <option>Language 1</option>
                                            <option>Language 1</option>
                                        </Form.Select>
                                    </Form.Group>
                                    
                                </Row>
                                <Row className="mb-3 mt-4">
                                    <Form.Group as={Col} md="4" controlId="formPlainTextEmail">
                                        <Form.Label>Question Set</Form.Label>
                                        <Form.Control
                                            type="text"
                                            // value={language.value}
                                            onChange={changeHandler}
                                            placeholder="Enter Last Name"
                                            name="question set"
                                            disabled={
                                                props.match.params.id !== undefined && !isUpdate
                                                  ? "disabled"
                                                  : ""
                                              }
                                        />
                                        <span className="text-danger">{language.ErrorMsg}</span>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" controlId="formPlainTextEmail">
                                        <Form.Label>Question Bank Mapping Pattern</Form.Label>
                                        <Form.Select>
                                            <option>Mappping Pattern</option>
                                            <option>Mappping Pattern</option>
                                            <option>Mappping Pattern</option>
                                        </Form.Select>
                                        <span className="text-danger">{name.ErrorMsg}</span>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3 mt-4">
                                    <Col class="col-md-4">
                                <div class="mb-3">
                                <label for="formFile" class="form-label"><strong>Upload Questions Excel</strong></label>
                                <input class="form-control" type="file" id="formFile"/>
                                </div>
                                </Col>
                                <Col>
                                <div class="mb-3">
                                    <label for="formFile" class="form-label"><strong>Upload Questions image Zip</strong></label>
                                    <input class="form-control" type="file" id="formFile"/>
                                </div>
                                </Col>
                                <Col>
                                <div class="mb-3">
                                    <label for="formFile" class="form-label"><strong>Upload Case Excel</strong></label>
                                    <input class="form-control" type="file" id="formFile"/>
                                </div>
                                </Col>
                                </Row>
                                {/* <Form.Group className="mb-3 mt-4">
                                    <Form.Check
                                        required
                                        label="Above information is correct"
                                        feedback="You must agree before submitting."
                                        feedbackType="invalid"
                                    />
                                </Form.Group> */}
                                {/* <Button className="mt-2" type="submit">Register</Button> */}

                                <Form.Group as={Row}>
                                    <Col sm={{ span: 10}}>
                                    {props.match.params.id === undefined && (
                                            <Button
                                                type="submit"
                                                variant="primary"
                                            // disabled={name.isError}
                                            >
                                                Create
                                            </Button>
                                        )}
                                        {props.match.params.id === undefined && (
                                        <Button
                                                    onClick={cancelHandler}
                                                    variant="danger"
                                                    // className={"ml-2"}
                                                    style={{ marginLeft: "10px"}}
                                                >
                                                    Cancel <FontAwesomeIcon icon={faTimes} />{" "}
                                                </Button>
                                        )}
                                        {props.match.params.id !== undefined &&
                                            !isUpdate ? (
                                            <Button
                                                type="button"
                                                onClick={editHandler}
                                                variant="info"
                                            >
                                                Edit <FontAwesomeIcon icon={faEdit} />{" "}
                                            </Button>
                                        ) : null}

                                        {props.match.params.id !== undefined && isUpdate ? (
                                            <>
                                                <Button
                                                    type="submit"
                                                    variant="success"
                                                >
                                                    Update{" "}
                                                    <FontAwesomeIcon icon={faCheckCircle} />{" "}
                                                </Button>
                                                <Button
                                                    onClick={cancelHandler}
                                                    variant="danger"
                                                    className={"ml-2"}
                                                    style={{ marginLeft: "10px"}}
                                                >
                                                    Cancel <FontAwesomeIcon icon={faTimes} />{" "}
                                                </Button>
                                            </>
                                        ) : null}
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default QuestionbankDetail;