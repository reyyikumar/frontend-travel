// ** React Imports
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

// ** Reactstrap Imports
import { Card, CardBody, Button, Input, Label } from 'reactstrap'

const AddActions = () => {
  return (
    <Fragment>
      <Card className='invoice-action-wrapper'>
      <Label className='m-1 fs-4'>
      Publish
              </Label>
        <CardBody>
        <div class="form-group">
      <label for="basicInput">Status</label>
      <input type="text" class="form-control" id="basicInput" placeholder="" />
    </div>
    <div class="form-group mt-1">
      <label for="basicInput">Visibility</label>
      <input type="text" class="form-control" id="basicInput" placeholder="" />
    </div>
  
        </CardBody>
      </Card>
      <Card className='invoice-action-wrapper'>
      <Label className='m-1 fs-4'>
      Publish Schedule
              </Label>
        <CardBody>
        <div class="form-group">
      <label for="basicInput">Publish Date & Time</label>
      <input type="text" class="form-control" id="basicInput" placeholder="Enter Publish date" />
    </div>
  
        </CardBody>
      </Card>
    </Fragment>
  )
}

export default AddActions
