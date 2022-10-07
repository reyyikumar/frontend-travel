// ** Third Party Components
import Flatpickr from 'react-flatpickr'
import { X } from 'react-feather'
import './style.css'


// ** Reactstrap Imports
import { Modal, Input, Label, Button, ModalHeader, ModalBody, InputGroup } from 'reactstrap'

// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

const AddNewModal = ({ open, handleModal }) => {


  // ** Custom close btn
  const CloseBtn = <X className='cursor-pointer' size={15} onClick={handleModal} />

  return (
    <Modal
      isOpen={open}
      toggle={handleModal}
      className='sidebar-sm'
      modalClassName='modal-dialog-centered'
      contentClassName='pt-0 modal-size'
    >
      <ModalHeader className='mb-1' toggle={handleModal} close={CloseBtn} tag='div'>
        <h5 className='modal-title'>Itenary Day 1</h5>
      </ModalHeader>
      <ModalBody className='flex-grow-1'>
        <div className='mb-1'>
          <Label className='form-label' for='full-name'>
            Title:
          </Label>
          <InputGroup>
            <Input id='full-name' placeholder='Enter Title' />
          </InputGroup>
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='post'>
          Description:
          </Label>
          <InputGroup>
          <div className='style'>
          <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Type Here</p>"
                    onReady={ editor => {
                        console.log('Editor is ready to use!', editor)
                    } }
                    onChange={ (event, editor) => {
                        const data = editor.getData()
                        console.log({ event, editor, data })
                    } }
                    onBlur={ (event, editor) => {
                        console.log('Blur.', editor)
                    } }
                    onFocus={ (event, editor) => {
                        console.log('Focus.', editor)
                    } }
                    />
          </div>
          </InputGroup>
        </div>
        <div className='mb-1 mt-3'>
        <div class="form-group">
  <label for="basicInputFile">Upload Images:</label>
  <div class="custom-file">
    <input type="file" class="custom-file-input" id="customFile" />
  </div>
</div>
  
        </div>
        <div className="d-flex justify-content-end">
        <Button className='me-1' color='primary' onClick={handleModal}>
          Save
        </Button>
        <Button color='secondary' onClick={handleModal} outline>
          Close
        </Button>
        </div>
      </ModalBody>
    </Modal>
  )
}

export default AddNewModal
