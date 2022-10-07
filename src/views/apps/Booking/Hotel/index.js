import { React, Fragment, useState } from "react" 
import InputNumber from 'rc-input-number'
import Hotels from './Hotels'
import { Plus, Minus } from 'react-feather'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Label,
  Input,
  Row,
  Col,
  Collapse, Button
} from "reactstrap"

const Hotel = () => {
  const [hotels, setHotels] = useState(false)
  const [picker, setPicker] = useState(new Date())
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h4">Same hotel, Cheapest price. Guranteed!!</CardTitle>
      </CardHeader>

      <CardBody>
        <Row>
          <Col className="mb-1" xl="3" md="6" sm="12">
            <Label className="form-label" for="basicInput">
              City/Hotel/Resort/Area
            </Label>
            <Input
              type="email"
              id="basicInput"
              placeholder="city/hotel/resort/area"
            />
          </Col>
          <Col className="mb-1" xl="2" md="6" sm="12">
            <Fragment>
              <Label className="form-label" for="hf-picker">
                Check-in Date:
              </Label>
              <input type="date"  value={picker}
                placeholder="mm/dd/yyyy"
                data-enable-time
                id="date-time-picker"
                className="form-control"
                onChange={(date) => setPicker(date)} />
            </Fragment>
          </Col>
          <Col className="mb-1" xl="2" md="6" sm="12">
            <Fragment>
              <Label className="form-label" for="date-time-picker">
                Check-out Date:
              </Label>
              <input type="date"  value={picker}
                placeholder="mm/dd/yyyy"
                data-enable-time
                id="date-time-picker"
                className="form-control"
                onChange={(date) => setPicker(date)} />
            </Fragment>
          </Col>
          <Col xl="3" md="6" sm="12">
          <div>
      <Button className='mt-2 ms-2' color='secondary' onClick={toggle}>
      Rooms & Guests
      </Button>
      <Collapse isOpen={isOpen}>
        <div className='p-1 border'>
          <span>
            <div className="d-flex">
            <div className="fs-4">
            <span className="ms-1 pt-2">Adult:</span>
            </div>
          <div className="">
            <InputNumber className='input-lg ms-2 border' id='basic-number-input' defaultValue={1} upHandler={<Plus />} downHandler={<Minus />} />
          </div>
            </div>
          </span>
        </div>
      </Collapse>
      <Collapse isOpen={isOpen}>
        <div className='p-1 border'>
          <span>
            <div className="d-flex">
            <div className="fs-4">
            <span className="pt-2">Childern:</span>
            </div>
          <div className="">
            <InputNumber className='input-lg ms-1 border' id='basic-number-input' defaultValue={1} upHandler={<Plus />} downHandler={<Minus />} />
          </div>
            </div>
          </span>
          <button type="button" class="btn btn-warning ms-1 mt-2">Remove</button>
        </div>
      </Collapse>
    </div>
          </Col>
          <Col className="mt-2">
            <button onClick={() => setHotels(!hotels)} type="button" class="btn btn-primary">
              Search
            </button>
          </Col>
          {hotels && <Hotels />}
        </Row>
      </CardBody>
    </Card>
  )
}

export default Hotel
