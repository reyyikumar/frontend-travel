import { React, Fragment, useState } from "react" 
// ** Third Party Components
import {Mail, Calendar, DollarSign, X } from 'react-feather'

// ** Reactstrap Imports
import { Modal, Input, Label, Button, ModalHeader, ModalBody, InputGroup,  Col } from 'reactstrap'

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
        <h5 className='modal-title'>Add Enquiry</h5>
      </ModalHeader>
      <ModalBody className='flex-grow-1'>
      <div className='d-flex justify-content-between'>
        <div className='mb-1'>
          <Label className='form-label' for='post'>
           Name
          </Label>
          <InputGroup>
            <Input id='post' placeholder='Enter Name' />
          </InputGroup>
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='post'>
          Email
          </Label>
          <InputGroup>
            <Input id='post' placeholder='Enter Email' />
          </InputGroup>
        </div>
        </div>
        <div className='d-flex justify-content-between'>
        <div className='mb-1'>
          <Label className='form-label' for='post'>
          Mobile Number
          </Label>
          <InputGroup>
            <Input id='post' placeholder='Enter Your Number' />
          </InputGroup>
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='post'>
          Select City
          </Label>
          <InputGroup>
            <Input id='post' placeholder='Select City' />
          </InputGroup>
        </div>
        </div>
        <div className='d-flex justify-content-between'>
        <div className='mb-1'>
          <Label className='form-label' for='post'>
          Select Package
          </Label>
          <InputGroup>
            <Input id='post' placeholder='Select Package Type' />
          </InputGroup>
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='post'>
          Number of Travellers
          </Label>
          <InputGroup>
            <Input id='post' placeholder='Number of travellers:' />
          </InputGroup>
        </div>
        </div>
        <div className='d-flex justify-content-between'>
        <div className='mb-1'>
          <Label className='form-label' for='post'>
          Select Hotels Type
          </Label>
          <InputGroup>
            <Input id='post' placeholder='Select Hotels Type' />
          </InputGroup>
        </div>
        
        <div className='mb-1'>
          <Label className='form-label' for='post'>
          Select duration
          </Label>
          <InputGroup>
            <Input id='post' placeholder='Select duration' />
          </InputGroup>
        </div>
        </div>
        <div className='d-flex justify-content-between'>
        <div className='mb-1'>
        <Fragment>
              <Label className="form-label" for="hf-picker">
              Travel Date:
              </Label>
              <input type="date"  value={picker}
                placeholder="mm/dd/yyyy"
                data-enable-time
                id="date-time-picker"
                className="form-control"
                onChange={(date) => setPicker(date)} />
            </Fragment>
        </div>
        <div className='mb-1'>
        <Fragment>
              <Label className="form-label" for="hf-picker">
              Follow Up Date:
              </Label>
              <input type="date"  value={picker}
                placeholder="mm/dd/yyyy"
                data-enable-time
                id="date-time-picker"
                className="form-control"
                onChange={(date) => setPicker(date)} />
            </Fragment>
        </div>
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
