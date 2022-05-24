import {
    faBinoculars,
    faEdit,
    faTimesCircle,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import React from "react";
  import { Button } from "react-bootstrap";
  import { Link } from "react-router-dom";
  
  const ActionButtons = (props) => {
    const deleteHandler = () => {
      // Add delete function for future feature
    };
  
    return (
      <>
        {props.detail ? (
          <Link
            className="btn btn-primary mr-2"
            to={props.detail.link + "/" + props.detail.id}
          >
            <FontAwesomeIcon icon={faBinoculars} />
          </Link>
        ) : null}
        {props.edit ? (
          <Link
            className="btn btn-secondary mr-2"
            to={props.edit.link + "/" + props.edit.id}
            title= {props.title}
          >
            <FontAwesomeIcon icon={faEdit} />
          </Link>
        ) : null}
        {/* <Link className="btn btn-danger mr-2" to={this.props.remove.link+ "/" + this.props.remove.id} ><FontAwesomeIcon icon={faTimesCircle} /></Link> */}
        {props.remove ? (
          <Button variant="danger" onClick={deleteHandler}>
            <FontAwesomeIcon icon={faTimesCircle} />
          </Button>
        ) : null}
      </>
    );
  };
  
  export default ActionButtons;
  