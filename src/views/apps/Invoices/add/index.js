// ** Invoice Add Components
import AddCard from './AddCard'
import AddActions from './AddActions'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'
import '@styles/base/pages/app-invoice.scss'
import { useState } from 'react'

const InvoiceAdd = () => {
  const [invoiceNumber, setInvoiceNumber] = useState(false)
  return (
    <div className='invoice-add-wrapper'>
      <Row className='invoice-add'>
        <Col xl={9} md={8} sm={12}>
          <AddCard invoiceNumber={invoiceNumber} setInvoiceNumber={setInvoiceNumber} />
        </Col>
        <Col xl={3} md={4} sm={12}>
          <AddActions invoiceNumber={invoiceNumber} />
        </Col>
      </Row>
    </div>
  )
}

export default InvoiceAdd
