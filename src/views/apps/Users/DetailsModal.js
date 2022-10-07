// ** Third Party Components
import {X} from 'react-feather'

// ** Reactstrap Imports
import { Modal, Input, Label, Button, ModalHeader, ModalBody, InputGroup} from 'reactstrap'

// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'

const DetailsModal = ({ open, handleModal }) => {
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
        <h5 className='modal-title'>User Details</h5>
      </ModalHeader>
      <ModalBody className='flex-grow-1'>
        <div className='d-flex justify-content-between'>
        <div className='mb-1'>
        <Label className='form-label' for='readonlyInput'>
            Name
            </Label>
            <Input type='text' id='readonlyInput' readOnly value=" Rahat"/>
        </div>
        <div className='mb-1'>
        <Label className='form-label' for='readonlyInput'>
              Email
            </Label>
            <Input type='text' id='readonlyInput' readOnly value="Rahat@gmail.com"/>
        </div>
        </div>

        <div className='d-flex justify-content-between'>
        <div className='mb-1'>
        <Label className='form-label' for='readonlyInput'>
              Phone 
            </Label>
            <Input type='text' id='readonlyInput' readOnly value="0169852936"/>
        </div>
        <div className='mb-1'>
        <Label className='form-label' for='readonlyInput'>
              Gender
            </Label>
            <Input type='text' id='readonlyInput' readOnly value="Male"/>
        </div>
        </div>

        <div className='d-flex justify-content-between'>
        <div className='mb-1'>
        <Label className='form-label' for='readonlyInput'>
              Date of Birth 
            </Label>
            <Input type='text' id='readonlyInput' readOnly value="23/11/1998"/>
        </div>
        <div className='mb-1'>
        <Label className='form-label' for='readonlyInput'>
              Address
            </Label>
            <Input type='text' id='readonlyInput' readOnly value="11/E gandaria"/>
        </div>
        </div>

        <div className='d-flex justify-content-between'>
        <div className='mb-1'>
        <Label className='form-label' for='readonlyInput'>
              Pincode 
            </Label>
            <Input type='text' id='readonlyInput' readOnly value="1200"/>
        </div>
        <div className='mb-1'>
        <Label className='form-label' for='readonlyInput'>
              city
            </Label>
            <Input type='text' id='readonlyInput' readOnly value="Dhaka"/>
        </div>
        </div>

        <div className='d-flex justify-content-between'>
        <div className='mb-1'>
        <Label className='form-label' for='readonlyInput'>
              State 
            </Label>
            <Input type='text' id='readonlyInput' readOnly value="Dhaka"/>
        </div>
        <div className='mb-1'>
        <Label className='form-label' for='readonlyInput'>
              Country
            </Label>
            <Input type='text' id='readonlyInput' readOnly value="Bangladesh"/>
        </div>
        </div>
        
        <div className="d-flex justify-content-end">
        <Button color='secondary' onClick={handleModal} outline>
          Cancel
        </Button>
        </div>
      </ModalBody>
    </Modal>
  )
}

export default DetailsModal
