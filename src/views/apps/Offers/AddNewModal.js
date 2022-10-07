// ** Third Party Components
import {Mail, Calendar, DollarSign, X } from 'react-feather'

// ** Reactstrap Imports
import { Modal, Input, Label, Button, ModalHeader, ModalBody, InputGroup,  Col } from 'reactstrap'

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
        <h5 className='modal-title'>Add Coupons</h5>
      </ModalHeader>
      <ModalBody className='flex-grow-1'>
        <div className='mb-1'>
          <Label className='form-label' for='full-name'>
            Name
          </Label>
          <InputGroup>
            <Input id='full-name' placeholder='Enter Name' />
          </InputGroup>
        </div>
        <div className='d-flex justify-content-between'>
        <div className='mb-1'>
          <Label className='form-label' for='post'>
          Discount
          </Label>
          <InputGroup>
            <Input id='post' placeholder='Enter Discount' />
          </InputGroup>
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='post'>
          Limit
          </Label>
          <InputGroup>
            <Input id='post' placeholder='Enter Limit' />
          </InputGroup>
        </div>
        </div>
        <div className='mb-1'>
        <Label className='form-label' for='joining-date'>
            Code Generate
          </Label>
        <Col>
        <InputGroup>
          <Input placeholder='' />
          <Button color='primary' outline>
            Generate
          </Button>
        </InputGroup>
      </Col>
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
