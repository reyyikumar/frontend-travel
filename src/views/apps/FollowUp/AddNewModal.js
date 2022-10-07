import { React, Fragment, useState } from "react" 
// ** Third Party Components
import { User, Briefcase, Mail, Calendar, DollarSign, X } from 'react-feather'

// ** Reactstrap Imports
import { Modal, Input, Button, ModalHeader, ModalBody, CardBody, CardText, Label } from 'reactstrap'

// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'

const AddNewModal = ({ open, handleModal }) => {

  // ** Custom close btn
  const CloseBtn = <X className='cursor-pointer' size={15} onClick={handleModal} />
  const [picker, setPicker] = useState(new Date())

  return (
    <Modal
      isOpen={open}
      toggle={handleModal}
      className='sidebar-sm'
      modalClassName='modal-dialog-centered'
      contentClassName='pt-0'
    >
      <ModalHeader className='mb-1' toggle={handleModal} close={CloseBtn} tag='div'>
        <h5 className='modal-title'>Extend Follow Up</h5>
      </ModalHeader>
      <ModalBody className='flex-grow-1'>
      <div className="me-1 mb-">
        <CardBody className="p-0">
        <CardText>
        Follow Up Notes
        </CardText>
        <Input type='textarea' name='text' id='exampleText' rows='3' placeholder='' />
      </CardBody>
        </div>
        <div className="mb-2">
        <Fragment>
              <Label className="form-label mb-1" for="hf-picker">
              Next Follow Up:
              </Label>
              <input type="date"  value={picker}
                placeholder="mm/dd/yyyy"
                data-enable-time
                id="date-time-picker"
                className="form-control"
                onChange={(date) => setPicker(date)} />
            </Fragment>
        </div>
        
        <div className="d-flex justify-content-end">
        <Button className='me-1' color='primary' onClick={handleModal}>
          Submit
        </Button>
        <Button color='secondary' onClick={handleModal} outline>
          Cancel
        </Button>
        </div>
      </ModalBody>
    </Modal>
  )
}

export default AddNewModal
