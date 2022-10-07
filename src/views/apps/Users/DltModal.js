// ** Third Party Components
import {X} from 'react-feather'

// ** Reactstrap Imports
import { Modal, Input, Label, Button, ModalHeader, ModalBody, InputGroup, ModalFooter} from 'reactstrap'

// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'

const DltNewModal = ({ open, handleModal }) => {
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
          <ModalBody className="d-flex justify-content-center" >
          ARE YOU SURE YOU WANT TO DELETE?
          </ModalBody>
          <ModalFooter className="d-flex justify-content-center">
          <div>
        <Button className='me-1' color='primary' onClick={handleModal}>
          Yes
        </Button>
        <Button color='secondary' onClick={handleModal} outline>
          No
        </Button>
        </div>
          </ModalFooter>
        </Modal>
  )
}

export default DltNewModal
