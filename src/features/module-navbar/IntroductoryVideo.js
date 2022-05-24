import React from 'react'
import { Row, Button, Col } from 'react-bootstrap'

export default function IntroductoryVideo() {
  return (
    <>
      <h3>Upload Video</h3>
      <Row class="col-md-4">
        <div class="mb-3 mt-4">
          <label for="formFile" class="form-label">From Desktop</label>
          <input class="form-control" type="file" id="formFile" />
        </div>
        <hr></hr>
        <label for="basic-url">URL</label>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon3">https://example.com</span>
          </div>
          <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" />
        </div>
      <div>
      <Button
          type="submit"
          variant="primary"
      >
          Update
      </Button>
      </div>
      </Row>
      <Row>
      <div
        className="col-md-6"
        style={{ height: "200px", width:"200px", border: "1px solid black"}}
      >

      </div>
      </Row>
    </>
  )
}
