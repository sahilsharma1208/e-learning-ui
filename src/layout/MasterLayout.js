import React from "react";
import { Container } from "react-bootstrap";
import Content from "./Content";

const MasterLayout = () => {
  
  return (
    <React.Fragment>
      <Container fluid>
        <Content />
      </Container>
    </React.Fragment>
  );
};

export default MasterLayout;
