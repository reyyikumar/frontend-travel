// ** Third Party Components
import {X} from 'react-feather'

// ** Reactstrap Imports
import { Modal, Input, Label, Button, ModalHeader, ModalBody, InputGroup} from 'reactstrap'

// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'

const EditNewModal = ({ open, handleModal }) => {
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
        <h5 className='modal-title'>Edit Offers</h5>
      </ModalHeader>
      <ModalBody className='flex-grow-1'>
        <div className='d-flex justify-content-between'>
        <div className='mb-1'>
        <Label className='form-label' for='readonlyInput'>
              Package Name
            </Label>
            <Input type='text' id='readonlyInput' readOnly value=" Umrah Package"/>
        </div>
        <div className='mb-1'>
        <Label className='form-label' for='readonlyInput'>
              Coupons Code
            </Label>
            <Input type='text' id='readonlyInput' readOnly value="Umrah"/>
        </div>
        </div>

        <div className='d-flex justify-content-between'>
        <div className='mb-1'>
        <Label className='form-label' for='readonlyInput'>
              Discound(%)
            </Label>
            <Input type='text' id='readonlyInput' readOnly value="30%"/>
        </div>
        <div className='mb-1'>
        <Label className='form-label' for='readonlyInput'>
              Used:
            </Label>
            <Input type='text' id='readonlyInput' readOnly value="100"/>
        </div>
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='post'>
          Limits:
          </Label>
          <InputGroup>
            <Input id='post' placeholder='Enter Number'/>
          </InputGroup>
        </div>
        
        <div className="d-flex justify-content-end">
        <Button className='me-1' color='primary' onClick={handleModal}>
          Save
        </Button>
        <Button color='secondary' onClick={handleModal} outline>
          Cancel
        </Button>
        </div>
      </ModalBody>
    </Modal>
  )
}

export default EditNewModal
