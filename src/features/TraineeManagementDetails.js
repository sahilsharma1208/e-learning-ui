import React, { useEffect } from 'react'
import { useState } from 'react'
import PageBreadcrum from '../ui/PageBreadCrum'
import { Row, Col, Card, Form, Button } from 'react-bootstrap'
import AdminMenu from '../ui/AdminMenu'
import { getInstitutes, updateTrainee, createTrainee, getTrainee } from '../services/management.service'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { getDefaultConfig } from '../helper/formcontrol.helper'
import {
    faCheckCircle,
    faEdit,
    faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function TraineeManagementDetails(props) {
    const [trainee, setTrainee] = useState(0);
    const [traineeDetail, setTraineeDetail] = useState({});
    const [organization, setOrganization] = useState(getDefaultConfig(""));
    const [firstName, setFirstName] = useState(getDefaultConfig(""));
    const [lastName, setLastName] = useState(getDefaultConfig(""));
    const [loginName, setLoginName] = useState(getDefaultConfig(""));
    const [pd, setPd] = useState(getDefaultConfig(""))
    const [isUpdate, setIsUpdate] = useState(false);
    const [institute, setInstitute] = useState([])
    const history = useHistory();

    useEffect(() => {
        getInstitutes().then((response) => {
            setInstitute(response);
        })
    }, [])

    useEffect(() => {
        if (props.match.params.id !== undefined) {
            getTrainee(props.match.params.id).then((response) => {
                setTrainee(response.id);
                setTraineeDetail(response);
                setFirstName({ value: response.firstName, isError: false, ErrorMsg: "" });
                setLastName({ value: response.lastName, isError: false, ErrorMsg: "" });
                setLoginName({ value: response.loginName, isError: false, ErrorMsg: "" });
                setPd({ value: response.pd, isError: false, ErrorMsg: "" });
            });
        }
    }, []);

    const submitHandler = (event) => {
        event.preventDefault();

        if (!(loginName.isError)) {
            if (props.match.params.id === undefined) {
                createTrainee({
                    firstName: firstName.value,
                    lastName: lastName.value,
                    loginName: loginName.value,
                    pd: pd.value,
                }).then((response) => {
                    if (response) {
                        history.push("/trainee-managements");
                    }
                });
            } else {
                // update the unit
                updateTrainee({
                    id: trainee,
                    firstName: firstName.value,
                    lastName: lastName.value,
                    loginName: loginName.value,
                    pd: pd.value,
                }).then((response) => {
                    if (response) {
                        history.push("/trainee-managements");
                    }
                });
            }
        }
    };

    const changeHandler = (event) => {
        if (event.target.name === "firstName") {
            if (event.target.value.length == 0) {
                setFirstName((prevState) => {
                    return {
                        ...prevState,
                        value: event.target.value,
                        isError: true,
                        ErrorMsg: "First Name can not be empty.",
                    };
                });
            } else {
                setFirstName((prevState) => {
                    return {
                        ...prevState,
                        value: event.target.value,
                        isError: false,
                        ErrorMsg: "",
                    };
                });
            }
        }

        if (event.target.name === "lastName") {
            if (event.target.value.length == 0) {
                setLastName((prevState) => {
                    return {
                        ...prevState,
                        value: event.target.value,
                        isError: true,
                        ErrorMsg: "First Name can not be empty.",
                    };
                });
            } else {
                setLastName((prevState) => {
                    return {
                        ...prevState,
                        value: event.target.value,
                        isError: false,
                        ErrorMsg: "",
                    };
                });
            }
        }

    if (event.target.name === "loginName") {
        if (event.target.value.length == 0) {
            setLoginName((prevState) => {
                return {
                    ...prevState,
                    value: event.target.value,
                    isError: true,
                    ErrorMsg: "Login Name can not be empty.",
                };
            });
        } else {
            setLoginName((prevState) => {
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
            setPd((prevState) => {
                return {
                    ...prevState,
                    value: event.target.value,
                    isError: true,
                    ErrorMsg: "Password can not be empty.",
                };
            });
        } else {
            setPd((prevState) => {
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
        setLoginName((prevState) => {
            return {
                ...prevState,
                value: traineeDetail.name,
                isError: false,
                ErrorMsg: "",
            };
        });
    };

    const breadcrums = [

        { link: "/home", label: "Home" },
        { link: "/trainee-managements", label: "Trainee Management" },
        // { link: "/trainee-management/add-trainee", label: "Add trainee" }
        {
            link:
                props.match.params.id !== undefined
                    ? "/trainee-management/" + props.match.params.id
                    : "/trainee-managements/add-trainee",
            label: props.match.params.id !== undefined ? "Detail" : "Add trainee",
            cssClass: "activelink",
        },
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
                                <Col>
                                    <PageBreadcrum items={breadcrums} />
                                    <h3 className='mt-4'>Registration</h3>
                                </Col>
                            </Row>
                            <Form onSubmit={submitHandler}>
                                <Row className="mb-3 mt-4">
                                    <Form.Group as={Col} md="4">
                                        <Form.Label>Organization</Form.Label>
                                        <Form.Select>
                                            <option>Organization 1</option>
                                            <option>Organization 2</option>
                                            <option>Organization 3</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" >
                                        <Form.Label>Institute</Form.Label>
                                        <Form.Select>
                                            {
                                                institute.map((item) => (
                                                    <option key={item.id}>{item.institute}</option>
                                                ))
                                            }

                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" controlId="formPlainTextEmail">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            onChange={changeHandler}
                                            value={firstName.value}
                                            placeholder="Enter First Name"
                                            firstName="firstName"
                                            disabled={
                                                props.match.params.id !== undefined && !isUpdate
                                                  ? "disabled"
                                                  : ""
                                              }
                                        />
                                        <span className="text-danger">{firstName.ErrorMsg}</span>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3 mt-4">
                                    <Form.Group as={Col} md="4" controlId="formPlainTextEmail">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={lastName.value}
                                            onChange={changeHandler}
                                            placeholder="Enter Last Name"
                                            lastName="lastName"
                                            disabled={
                                                props.match.params.id !== undefined && !isUpdate
                                                  ? "disabled"
                                                  : ""
                                              }
                                        />
                                        <span className="text-danger">{lastName.ErrorMsg}</span>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" controlId="formPlainTextEmail">
                                        <Form.Label>Login Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            onChange={changeHandler}
                                            value={loginName.value}
                                            placeholder="Enter Login Name"
                                            loginName="loginName"
                                            disabled={
                                                props.match.params.id !== undefined && !isUpdate
                                                  ? "disabled"
                                                  : ""
                                              }
                                        />
                                        <span className="text-danger">{loginName.ErrorMsg}</span>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" controlId="validationCustom05">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            value= {pd.value}
                                            name="pd"
                                            placeholder="Enter Password" required />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3 mt-4">
                                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control
                                            required
                                            value= {pd.value}
                                            type="password"
                                            name="pd"
                                            placeholder="Confirm Password"
                                        />
                                    </Form.Group>
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
                                                Register
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

export default TraineeManagementDetails;