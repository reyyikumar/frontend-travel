// ** React Imports
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

// ** Reactstrap Imports
import { Card, CardBody, Button, Input } from 'reactstrap'

const AddActions = ({ invoiceNumber }) => {

  
  return (
    <Fragment>
      <Card className='invoice-action-wrapper'>
        <CardBody>
          <Button color='primary' block className='mb-75' disabled>
            Send Invoice
          </Button>
          <Button tag={Link} to={`/apps/Invoices/preview/${4990 || invoiceNumber}`} color='primary' block outline className='mb-75'>
            Preview
          </Button>
          <Button color='primary' block outline>
            Save
          </Button>
          {/* <Button className='mt-1' color='success' block onClick={() => setAddPaymentOpen(true)}>
            Add Payment
          </Button> */}
        </CardBody>
      </Card>
    </Fragment>
  )
}

export default AddActions
