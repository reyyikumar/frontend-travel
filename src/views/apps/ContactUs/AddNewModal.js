import { React, Fragment} from "react" 
// ** Third Party Components
import {Mail, Calendar, DollarSign, X } from 'react-feather'

// ** Reactstrap Imports
import { Modal, Input, Label, Button, ModalHeader, ModalBody, InputGroup, CardBody, CardText} from 'reactstrap'

// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'

const AddNewModal = ({ open, handleModal }) => {
  // ** Custom close btn
  const CloseBtn = <X className='cursor-pointer' size={15} onClick={handleModal} />

  return (
    <Modal
      isOpen={open}
      toggle={handleModal}
      className='sidebar-sm'
      modalClassName='modal-dialog-centered'
      contentClassName='pt-0'
    >
      <ModalHeader className='mb-1' toggle={handleModal} close={CloseBtn} tag='div'>
        <h5 className='modal-title'>Contact form</h5>
      </ModalHeader>
      <ModalBody className='flex-grow-1'>
      <div className='d-flex justify-content-between'>
        <div className='mb-1'>
          <Label className='form-label' for='post'>
          First Name:
          </Label>
          <InputGroup>
            <Input id='post' placeholder='Enter first Name' />
          </InputGroup>
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='post'>
          Last Name:
          </Label>
          <InputGroup>
            <Input id='post' placeholder='Enter Last Name' />
          </InputGroup>
        </div>
        </div>
        <div className='d-flex justify-content-between'>
        <div className='mb-1'>
          <Label className='form-label' for='post'>
          Email
          </Label>
          <InputGroup>
            <Input id='post' placeholder='Enter Your Email' />
          </InputGroup>
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='post'>
          Agent Id:
          </Label>
          <InputGroup>
            <Input id='post' placeholder='Enter Your Number' />
          </InputGroup>
        </div>
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='post'>
          Select Category:
          </Label>
          <InputGroup>
            <Input id='post' placeholder='Select Category' />
          </InputGroup>
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='post'>
          Subject:
          </Label>
          <InputGroup>
            <Input id='post' placeholder='Enter Subject' />
          </InputGroup>
        </div>
        <div className="me-1">
        <CardBody>
        <CardText>
        Statement:
        </CardText>
        <Input type='textarea' name='text' id='exampleText' rows='3' placeholder='Describe your Problems' />
      </CardBody>
        </div>

        <div className="d-flex justify-content-end">
        <Button className='me-1' color='primary' onClick={handleModal}>
          Create
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
