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
        <h5 className='modal-title'>Add User</h5>
      </ModalHeader>
      <ModalBody className='flex-grow-1'>
      <div className='d-flex justify-content-between'>
        <div className='mb-1'>
          <Label className='form-label' for='post'>
          First Name
          </Label>
          <InputGroup>
            <Input id='post' placeholder='Enter Discount' />
          </InputGroup>
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='post'>
          Last Name
          </Label>
          <InputGroup>
            <Input id='post' placeholder='Enter Limit' />
          </InputGroup>
        </div>
        </div>
        <div>
        <div>
                        <h6>Gender</h6>
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
                              Male
                            </Label>
                          </div>
                          <div className="form-check me-1">
                            <Input type="radio" name="ex1" id="ex1-inactive" />
                            <Label
                              className="form-check-label"
                              for="ex1-inactive"
                            >
                              Female
                            </Label>
                          </div>
                          <div className="form-check">
                            <Input type="radio" name="ex1" id="ex1-inactive" />
                            <Label
                              className="form-check-label"
                              for="ex1-inactive"
                            >
                              Others
                            </Label>
                          </div>
                        </div>
                      </div>
        </div>
        <div className='d-flex justify-content-between'>
        <div className='mb-1'>
          <Label className='form-label' for='post'>
          Email
          </Label>
          <InputGroup>
            <Input id='post' placeholder='Enter Email' />
          </InputGroup>
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='post'>
          Mobile Number
          </Label>
          <InputGroup>
            <Input id='post' placeholder='Enter Mobile' />
          </InputGroup>
        </div>
        </div>
        <div>
        <Fragment>
              <Label className="form-label mb-1" for="hf-picker">
              Date of Birth:
              </Label>
              <input type="date"  value={picker}
                placeholder="mm/dd/yyyy"
                data-enable-time
                id="date-time-picker"
                className="form-control"
                onChange={(date) => setPicker(date)} />
            </Fragment>
        </div>
        <div>
        <Label className='form-label mt-1' for='post'>
        Address:
          </Label>
          <div className='d-flex justify-content-between'>
        <div className='mb-1'>
          <Label className='form-label' for='post'>
          House Number:
          </Label>
          <InputGroup>
            <Input id='post' placeholder='Enter house no.' />
          </InputGroup>
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='post'>
          Street Number:
          </Label>
          <InputGroup>
            <Input id='post' placeholder='Enter street no.' />
          </InputGroup>
        </div>
        </div>

        <div className='d-flex justify-content-between'>
        <div className='mb-1'>
          <Label className='form-label' for='post'>
          Landmark:
          </Label>
          <InputGroup>
            <Input id='post' placeholder='Enter Landmark' />
          </InputGroup>
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='post'>
          City:
          </Label>
          <InputGroup>
            <Input id='post' placeholder='Enter City' />
          </InputGroup>
        </div>
        </div>

        <div className='d-flex justify-content-between'>
        <div className='mb-1'>
          <Label className='form-label' for='post'>
          Pincode:
          </Label>
          <InputGroup>
            <Input id='post' placeholder='Enter Pincode ' />
          </InputGroup>
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='post'>
          State:
          </Label>
          <InputGroup>
            <Input id='post' placeholder='Enter state' />
          </InputGroup>
        </div>
        </div>
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='post'>
          Country:
          </Label>
          <InputGroup>
            <Input id='post' placeholder='Enter Country' />
          </InputGroup>
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
