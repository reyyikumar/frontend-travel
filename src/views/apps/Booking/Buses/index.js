import { React, Fragment, useState } from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Label,
  Input,
  Collapse,
  Button,
  Row,
  Col,
  Form
} from "reactstrap"

const Buses = () => {
  const [picker, setPicker] = useState(new Date())
  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h4">Book your seat now</CardTitle>
      </CardHeader>
      <CardBody>
        <Row>
          <Col href="#one-way" className="mb-1" xl="4" md="6" sm="12">
            <Label className="form-label" for="basicInput">
              From:
            </Label>
            <Input type="email" id="basicInput" placeholder="From" />
          </Col>
          <Col className="mb-1" xl="4" md="6" sm="12">
            <Label className="form-label" for="basicInput">
              To:
            </Label>
            <Input type="email" id="basicInput" placeholder="To" />
          </Col>
          <Col className="mb-1" xl="2" md="6" sm="12">
            <Fragment>
              <Label className="form-label" for="hf-picker">
                Date:
              </Label>
              <input
                type="date"
                value={picker}
                placeholder="mm/dd/yyyy"
                data-enable-time
                id="date-time-picker"
                className="form-control"
                onChange={(date) => setPicker(date)}
              />
            </Fragment>
          </Col>
          <Col className="mt-2">
            <button type="button" class="btn btn-primary">
              Search
            </button>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default Buses
