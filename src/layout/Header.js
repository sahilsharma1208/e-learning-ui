import React from 'react'
import { Navbar, Form, FormControl, Button } from 'react-bootstrap'

export default function Header() {
  return (
    <Navbar bg="light" expand="lg" style={{height: "70px", width: "100%"}}>
        <Navbar.Brand className="nav-logo" href="#">Logo</Navbar.Brand>
        {/* <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form> */}
    </Navbar>
  )
}
