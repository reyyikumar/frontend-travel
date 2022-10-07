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
        <h5 className='modal-title'>Sub-Agent Details</h5>
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
              city
            </Label>
            <Input type='text' id='readonlyInput' readOnly value="Dhaka"/>
        </div>
        </div>

        <div className='d-flex justify-content-between'>
        <div className='mb-1'>
        <Label className='form-label' for='readonlyInput'>
              Raferral Id 
            </Label>
            <Input type='text' id='readonlyInput' readOnly value="Abc"/>
        </div>
        <div className='mb-1'>
        <Label className='form-label' for='readonlyInput'>
            Date of join
            </Label>
            <Input type='text' id='readonlyInput' readOnly value="11"/>
        </div>
        </div>


        <div className='d-flex justify-content-between'>
        <div className='mb-1'>
        <Label className='form-label' for='readonlyInput'>
              Total Revenue
            </Label>
            <Input type='text' id='readonlyInput' readOnly value="100000"/>
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
