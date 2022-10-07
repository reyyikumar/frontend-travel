import { React, Fragment, useState } from "react"
import {
  Card,
  CardHeader,
  TabContent,
  TabPane,
  CardTitle,
  CardBody,
  Label,
  Input,
  Collapse,
  Button,
  Row,
  Col,
  NavItem,
  Nav,
  NavLink,
  Form
} from "reactstrap"
import InputNumber from "rc-input-number"
import { Plus, Minus, X } from "react-feather"
import Repeater from "@components/repeater"
import "./index.scss"

const Flights = () => {
  const [picker, setPicker] = useState(new Date())
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const [active, setActive] = useState("1")
  const [count, setCount] = useState(1)
  const togglee = (tab) => {
    if (active !== tab) {
      setActive(tab)
    }
  }
  const increaseCount = () => {
    setCount(count + 1)
  }
  const deleteForm = (e) => {
    e.preventDefault()
    e.target.closest("form").remove()
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h4">Search Flights</CardTitle>
      </CardHeader>
      <Fragment>
        <Nav tabs>
          <NavItem>
            <NavLink
              active={active === "1"}
              onClick={() => {
                togglee("1")
              }}
            >
              One Way
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={active === "2"}
              onClick={() => {
                togglee("2")
              }}
            >
              Round way
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={active === "3"}
              onClick={() => {
                togglee("3")
              }}
            >
              Multi city
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent className="py-50" activeTab={active}>
          <TabPane tabId="1">
            <CardBody>
              <Row>
                <Col href="#one-way" className="mb-1" xl="2" md="6" sm="12">
                  <Label className="form-label" for="basicInput">
                    From:
                  </Label>
                  <Input type="email" id="basicInput" placeholder="From" />
                </Col>
                <Col className="mb-1" xl="2" md="6" sm="12">
                  <Label className="form-label" for="basicInput">
                    To:
                  </Label>
                  <Input type="email" id="basicInput" placeholder="To" />
                </Col>
                <Col className="mb-1" xl="2" md="6" sm="12">
                  <Fragment>
                    <Label className="form-label" for="hf-picker">
                      Check-in Date:
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
                <Col xl="2" md="6" sm="12">
                  <Label className="form-label ms-2" for="basicInput">
                    Travellers:
                  </Label>
                  <div className="traveller">
                    <Button
                      className=" ms-2 "
                      color="secondary"
                      onClick={toggle}
                    >
                      TRAVELERS,CLASS
                    </Button>
                    <Collapse isOpen={isOpen}>
                      <div className="mt-2">
                        <span>
                          <div className="d-flex justify-content-between">
                            <div className="fs-5">
                              <span className="pt-2">Adult:</span>
                            </div>
                            <div className="ms-1">
                              <InputNumber
                                className="input-lg  border"
                                id="basic-number-input"
                                defaultValue={1}
                                upHandler={<Plus />}
                                downHandler={<Minus />}
                              />
                            </div>
                          </div>
                        </span>
                      </div>
                    </Collapse>
                    <Collapse isOpen={isOpen}>
                      <div className="mt-1">
                        <span>
                          <div className="d-flex justify-content-between">
                            <div className="fs-5">
                              <span className="pt-2">Childern:</span>
                            </div>
                            <div className="ms-1">
                              <InputNumber
                                className="input-lg border"
                                id="basic-number-input"
                                defaultValue={1}
                                upHandler={<Plus />}
                                downHandler={<Minus />}
                              />
                            </div>
                          </div>
                        </span>
                      </div>
                    </Collapse>
                    <Collapse isOpen={isOpen}>
                      <div className="mt-1">
                        <span>
                          <div className="d-flex justify-content-between">
                            <div className="fs-5">
                              <span className="pt-2">Infants:</span>
                            </div>
                            <div className="ms-1">
                              <InputNumber
                                className="input-lg border"
                                id="basic-number-input"
                                defaultValue={1}
                                upHandler={<Plus />}
                                downHandler={<Minus />}
                              />
                            </div>
                          </div>
                        </span>
                      </div>
                      <div>
                        <h6>class</h6>
                        <div className="d-flex">
                          <div className="form-check">
                            <Input
                              type="radio"
                              id="ex1-active"
                              name="ex1"
                              defaultChecked
                            />
                            <Label
                              className="form-check-label me-1"
                              for="ex1-active"
                            >
                              Business
                            </Label>
                          </div>
                          <div className="form-check">
                            <Input type="radio" name="ex1" id="ex1-inactive" />
                            <Label
                              className="form-check-label"
                              for="ex1-inactive"
                            >
                              Economy
                            </Label>
                          </div>
                        </div>
                      </div>
                      <button type="button" class="btn btn-warning ms-5 mt-2">
                        Remove
                      </button>
                    </Collapse>
                  </div>
                </Col>
                <Col className="mt-2">
                  <button type="button" class="btn btn-primary">
                    Search
                  </button>
                </Col>
              </Row>
            </CardBody>
          </TabPane>
          <TabPane tabId="2">
            <CardBody>
              <Row>
                <Col href="#one-way" className="mb-1" xl="2" md="6" sm="12">
                  <Label className="form-label" for="basicInput">
                    From:
                  </Label>
                  <Input type="email" id="basicInput" placeholder="From" />
                </Col>
                <Col className="mb-1" xl="2" md="6" sm="12">
                  <Label className="form-label" for="basicInput">
                    To:
                  </Label>
                  <Input type="email" id="basicInput" placeholder="To" />
                </Col>
                <Col className="mb-1" xl="2" md="6" sm="12">
                  <Fragment>
                    <Label className="form-label" for="hf-picker">
                      Departure:
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
                <Col className="mb-1" xl="2" md="6" sm="12">
                  <Fragment>
                    <Label className="form-label" for="hf-picker">
                      Return:
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
                <Col xl="2" md="6" sm="12">
                  <Label className="form-label ms-2" for="basicInput">
                    Travellers:
                  </Label>
                  <div className="traveller">
                    <Button
                      className=" ms-2 "
                      color="secondary"
                      onClick={toggle}
                    >
                      TRAVELERS,CLASS
                    </Button>
                    <Collapse isOpen={isOpen}>
                      <div className="mt-2">
                        <span>
                          <div className="d-flex justify-content-between">
                            <div className="fs-5">
                              <span className="pt-2">Adult:</span>
                            </div>
                            <div className="ms-1">
                              <InputNumber
                                className="input-lg  border"
                                id="basic-number-input"
                                defaultValue={1}
                                upHandler={<Plus />}
                                downHandler={<Minus />}
                              />
                            </div>
                          </div>
                        </span>
                      </div>
                    </Collapse>
                    <Collapse isOpen={isOpen}>
                      <div className="mt-1">
                        <span>
                          <div className="d-flex justify-content-between">
                            <div className="fs-5">
                              <span className="pt-2">Childern:</span>
                            </div>
                            <div className="ms-1">
                              <InputNumber
                                className="input-lg border"
                                id="basic-number-input"
                                defaultValue={1}
                                upHandler={<Plus />}
                                downHandler={<Minus />}
                              />
                            </div>
                          </div>
                        </span>
                      </div>
                    </Collapse>
                    <Collapse isOpen={isOpen}>
                      <div className="mt-1">
                        <span>
                          <div className="d-flex justify-content-between">
                            <div className="fs-5">
                              <span className="pt-2">Infants:</span>
                            </div>
                            <div className="ms-1">
                              <InputNumber
                                className="input-lg border"
                                id="basic-number-input"
                                defaultValue={1}
                                upHandler={<Plus />}
                                downHandler={<Minus />}
                              />
                            </div>
                          </div>
                        </span>
                      </div>
                      <div>
                        <h6>class</h6>
                        <div className="d-flex">
                          <div className="form-check">
                            <Input
                              type="radio"
                              id="ex1-active"
                              name="ex1"
                              defaultChecked
                            />
                            <Label
                              className="form-check-label me-1"
                              for="ex1-active"
                            >
                              Business
                            </Label>
                          </div>
                          <div className="form-check">
                            <Input type="radio" name="ex1" id="ex1-inactive" />
                            <Label
                              className="form-check-label"
                              for="ex1-inactive"
                            >
                              Economy
                            </Label>
                          </div>
                        </div>
                      </div>
                      <button type="button" class="btn btn-warning ms-5 mt-2">
                        Remove
                      </button>
                    </Collapse>
                  </div>
                </Col>
                <Col className="mt-2">
                  <button type="button" class="btn btn-primary">
                    Search
                  </button>
                </Col>
              </Row>
            </CardBody>
          </TabPane>
          <TabPane tabId="3">
            <CardBody>
              <Row>
                <Col href="#one-way" className="mb-1" xl="2" md="6" sm="12">
                  <Label className="form-label" for="basicInput">
                    From:
                  </Label>
                  <Input type="email" id="basicInput" placeholder="From" />
                </Col>
                <Col className="mb-1" xl="2" md="6" sm="12">
                  <Label className="form-label" for="basicInput">
                    To:
                  </Label>
                  <Input type="email" id="basicInput" placeholder="To" />
                </Col>
                <Col className="mb-1" xl="2" md="6" sm="12">
                  <Fragment>
                    <Label className="form-label" for="hf-picker">
                      Journey Date:
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
                <Col xl="2" md="6" sm="12">
                  <Label className="form-label ms-2" for="basicInput">
                    Travellers:
                  </Label>
                  <div className="traveller">
                    <Button
                      className=" ms-2 "
                      color="secondary"
                      onClick={toggle}
                    >
                      TRAVELERS,CLASS
                    </Button>
                    <Collapse isOpen={isOpen}>
                      <div className="mt-2">
                        <span>
                          <div className="d-flex justify-content-between">
                            <div className="fs-5">
                              <span className="pt-2">Adult:</span>
                            </div>
                            <div className="ms-1">
                              <InputNumber
                                className="input-lg  border"
                                id="basic-number-input"
                                defaultValue={1}
                                upHandler={<Plus />}
                                downHandler={<Minus />}
                              />
                            </div>
                          </div>
                        </span>
                      </div>
                    </Collapse>
                    <Collapse isOpen={isOpen}>
                      <div className="mt-1">
                        <span>
                          <div className="d-flex justify-content-between">
                            <div className="fs-5">
                              <span className="pt-2">Childern:</span>
                            </div>
                            <div className="ms-1">
                              <InputNumber
                                className="input-lg border"
                                id="basic-number-input"
                                defaultValue={1}
                                upHandler={<Plus />}
                                downHandler={<Minus />}
                              />
                            </div>
                          </div>
                        </span>
                      </div>
                    </Collapse>
                    <Collapse isOpen={isOpen}>
                      <div className="mt-1">
                        <span>
                          <div className="d-flex justify-content-between">
                            <div className="fs-5">
                              <span className="pt-2">Infants:</span>
                            </div>
                            <div className="ms-1">
                              <InputNumber
                                className="input-lg border"
                                id="basic-number-input"
                                defaultValue={1}
                                upHandler={<Plus />}
                                downHandler={<Minus />}
                              />
                            </div>
                          </div>
                        </span>
                      </div>
                      <div>
                        <h6>class</h6>
                        <div className="d-flex">
                          <div className="form-check">
                            <Input
                              type="radio"
                              id="ex1-active"
                              name="ex1"
                              defaultChecked
                            />
                            <Label
                              className="form-check-label me-1"
                              for="ex1-active"
                            >
                              Business
                            </Label>
                          </div>
                          <div className="form-check">
                            <Input type="radio" name="ex1" id="ex1-inactive" />
                            <Label
                              className="form-check-label"
                              for="ex1-inactive"
                            >
                              Economy
                            </Label>
                          </div>
                        </div>
                      </div>
                      <button type="button" class="btn btn-warning ms-5 mt-2">
                        Remove
                      </button>
                    </Collapse>
                  </div>
                </Col>
              </Row>
            </CardBody>
            <CardBody>
              <Row>
                <Col href="#one-way" className="mb-1" xl="2" md="6" sm="12">
                  <Label className="form-label" for="basicInput">
                    From:
                  </Label>
                  <Input type="email" id="basicInput" placeholder="From" />
                </Col>
                <Col className="mb-1" xl="2" md="6" sm="12">
                  <Label className="form-label" for="basicInput">
                    To:
                  </Label>
                  <Input type="email" id="basicInput" placeholder="To" />
                </Col>
                <Col className="mb-1" xl="2" md="6" sm="12">
                  <Fragment>
                    <Label className="form-label" for="hf-picker">
                      Journey Date:
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
                <Col href="#one-way" className="mb-1 ms-2" xl="3" md="3" sm="12">
                  <Button
                    className="btn-icon mt-2"
                    color="primary"
                    onClick={increaseCount}
                  >
                    <Plus size={14} />
                    <span className="align-middle ms-25">Add Another City</span>
                  </Button>
                </Col>
                <Repeater count={count}>
                  {(i) => (
                    <Form key={i}>
                      <Row className="align-items-center">
                        <Col md={2} className="mb-md-0 mb-1">
                          <Label className="form-label" for={`item-name-${i}`}>
                            From:
                          </Label>
                          <Input
                            type="text"
                            id={`item-name-${i}`}
                            placeholder="From"
                          />
                        </Col>
                        <Col md={2} className="mb-md-0 mb-1">
                          <Label className="form-label" for={`cost-${i}`}>
                            To:
                          </Label>
                          <Input
                            type="text"
                            id={`cost-${i}`}
                            placeholder="To"
                          />
                        </Col>
                        <Col md={2} className="mb-md-0 mb-1">
                        <Fragment>
                    <Label className="form-label" for="hf-picker">
                      Journey Date:
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
                        <Col md={2}>
                          <Button
                            color="danger"
                            className="text-nowrap px-1"
                            onClick={deleteForm}
                            outline
                          >
                            <X size={14} className="me-50" />
                            <span>Delete</span>
                          </Button>
                        </Col>
                        <Col sm={12}>
                          <hr />
                        </Col>
                      </Row>
                    </Form>
                  )}
                </Repeater>
                <div className="mt-2  d-flex justify-content-md-end">
                <button class="btn btn-primary  btn-lg" type="button">Search</button>
                </div>
              </Row>
            </CardBody>
          </TabPane>
        </TabContent>
      </Fragment>
    </Card>
  )
}

export default Flights
