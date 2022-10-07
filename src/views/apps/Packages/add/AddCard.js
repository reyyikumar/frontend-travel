// ** React Imports
import { Fragment, useState, useEffect } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

// ** Custom Components
import Sidebar from '@components/sidebar'
import Repeater from '@components/repeater'
import { useDropzone } from 'react-dropzone'

// ** Third Party Components
import axios from 'axios'
import { X, Plus, Hash, DownloadCloud } from 'react-feather'
import Select, {} from 'react-select'

// ** Reactstrap Imports
import { selectThemeColors } from '@utils'
import { Row, Col, Card, Form, Input, Label, Button, CardBody, NavLink,  Nav, NavItem, TabContent, TabPane, CardImg, CardText, CardTitle } from 'reactstrap'

// ** Styles
import 'react-slidedown/lib/slidedown.css'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/flatpickr/flatpickr.scss'
import '@styles/base/pages/app-invoice.scss'
import AddNewModal from '../../Packages/AddNewModal'
const AddCard = () => {
  const [modal, setModal] = useState(false)
  const [count, setCount] = useState(1)
  const [active, setActive] = useState('1')
  const [files, setFiles] = useState([])
  const [open, setOpen] = useState(false)
  const [options, setOptions] = useState([
    {
      value: 'add-new',
      label: 'Add New Customer',
      type: 'button',
      color: 'flat-success'
    }
  ])

  const handleModal = () => setModal(!modal)

  const increaseCount = () => {
    setCount(count + 1)
  }

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: acceptedFiles => {
      setFiles([...files, ...acceptedFiles.map(file => Object.assign(file))])
    }
  })
  const handleRemoveFile = file => {
    const uploadedFiles = files
    const filtered = uploadedFiles.filter(i => i.name !== file.name)
    setFiles([...filtered])
  }

  const fileList = files.map((file, index) => (
    <ListGroupItem key={`${file.name}-${index}`} className='d-flex align-items-center justify-content-between'>
      <div className='file-details d-flex align-items-center'>
        <div className='file-preview me-1'>{renderFilePreview(file)}</div>
        <div>
          <p className='file-name mb-0'>{file.name}</p>
          <p className='file-size mb-0'>{renderFileSize(file.size)}</p>
        </div>
      </div>
      <Button color='danger' outline size='sm' className='btn-icon' onClick={() => handleRemoveFile(file)}>
        <X size={14} />
      </Button>
    </ListGroupItem>
  ))

  useEffect(() => {
    // ** Get Clients
    axios.get('/api/invoice/clients').then(response => {
      const arr = options
      response.data.map(item => arr.push({ value: item.name, label: item.name }))
      setOptions([...arr])
    })

    // ** Get Invoices & Set Invoice Number
    axios
      .get('/apps/invoice/invoices', {
        q: '',
        page: 1,
        status: '',
        sort: 'asc',
        perPage: 10,
        sortColumn: 'id'
      })
  }, [])

  // ** Function to toggle sidebar
  const toggleSidebar = () => setOpen(!open)

  // ** Vars
  const countryOptions = [
    { value: 'australia', label: 'Australia' },
    { value: 'canada', label: 'Canada' },
    { value: 'russia', label: 'Russia' },
    { value: 'saudi-arabia', label: 'Saudi Arabia' },
    { value: 'singapore', label: 'Singapore' },
    { value: 'sweden', label: 'Sweden' },
    { value: 'switzerland', label: 'Switzerland' },
    { value: 'united-kingdom', label: 'United Kingdom' },
    { value: 'united-arab-emirates', label: 'United Arab Emirates' },
    { value: 'united-states-of-america', label: 'United States of America' }
  ]

  // ** Custom Options Component
  const OptionComponent = ({ data, ...props }) => {
    if (data.type === 'button') {
      return (
        <Button className='text-start rounded-0 px-50' color={data.color} block onClick={() => setOpen(true)}>
          <Plus className='font-medium-1 me-50' />
          <span className='align-middle'>{data.label}</span>
        </Button>
      )
    } else {
      return <components.Option {...props}> {data.label} </components.Option>
    }
  }
  return (
    <Fragment>
      <Card className='invoice-preview-card'>
      <CardBody>
        <Form>
          <Row>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='nameMulti'>
              Select Location
              </Label>
              <Input type='text' name='name' id='nameMulti' placeholder='Select Location' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='lastNameMulti'>
              Package name
              </Label>
              <Input type='text' name='lastname' id='lastNameMulti' placeholder='Type Package Name' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='cityMulti'>
              Select duration
              </Label>
              <Input type='text' name='city' id='cityMulti' placeholder='Select duration' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='CountryMulti'>
              Select Hotels Type
              </Label>
              <Input type='text' name='country' id='CountryMulti' placeholder=' Select Hotels Type' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='CompanyMulti'>
              Select Hotel
              </Label>
              <Input type='text' name='company' id='CompanyMulti' placeholder='Select Hotel' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='EmailMulti'>
              Select Room Type
              </Label>
              <Input type='email' name='Email' id='EmailMulti' placeholder='Select Room Type' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='EmailMulti'>
              Select Airline
              </Label>
              <Input type='email' name='Email' id='EmailMulti' placeholder='Select Airline' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='EmailMulti'>
              Package price
              </Label>
              <Input type='email' name='Email' id='EmailMulti' placeholder='Package price' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='EmailMulti'>
              Travel type
              </Label>
              <Input type='email' name='Email' id='EmailMulti' placeholder='Travel type' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='EmailMulti'>
              Currency
              </Label>
              <Input type='email' name='Email' id='EmailMulti' placeholder='Currency' />
            </Col>
            <Col sm='12'>
              <div className='d-flex justify-content-end'>
                <Button className='me-1' color='primary' type='submit' onClick={e => e.preventDefault()}>
                  Close
                </Button>
                <Button outline color='secondary' type='reset'>
                  Save Package
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </CardBody>

      </Card>
      <Card className='invoice-preview-card'>
      <CardBody>
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <div className='d-flex align-items-center justify-content-center flex-column'>
            <DownloadCloud size={64} />
            <h5>Drop Files here or click to upload</h5>
            <p className='text-secondary'>
              Drop files here or click{' '}
              <a href='/' onClick={e => e.preventDefault()}>
                browse
              </a>{' '}
              thorough your machine
            </p>
          </div>
        </div>
        {files.length ? (
          <Fragment>
            <ListGroup className='my-2'>{fileList}</ListGroup>
            <div className='d-flex justify-content-end'>
              <Button className='me-1' color='danger' outline onClick={handleRemoveAllFiles}>
                Remove All
              </Button>
              <Button color='primary'>Upload Files</Button>
            </div>
          </Fragment>
        ) : null}
      </CardBody>
      </Card>

      <Card className='invoice-preview-card'>
      <CardBody>
      <Fragment>
      <Nav tabs justified>
        <NavItem>
          <NavLink
            active={active === '1'}
            onClick={() => {
              toggle('1')
            }}
          >
            overview
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '2'}
            onClick={() => {
              toggle('2')
            }}
          >
            itinerary
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '3'}
            onClick={() => {
              toggle('3')
            }}
          >
            inclusions
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '4'}
            onClick={() => {
              toggle('4')
            }}
          >
            exclusions
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '5'}
            onClick={() => {
              toggle('5')
            }}
          >
            room sharing
          </NavLink>
        </NavItem>
        {/* <NavItem>
          <NavLink
            active={active === '6'}
            onClick={() => {
              toggle('6')
            }}
          >
            user reviews
          </NavLink>
        </NavItem> */}
        <NavItem>
          <NavLink
            active={active === '7'}
            onClick={() => {
              toggle('6')
            }}
          >
            terms & conditions
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className='py-50' activeTab={active}>
        <TabPane tabId='1'>
        <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
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
        </TabPane>
        <TabPane tabId='2'>
          <Card>
            <CardBody>
            <Button className='btn-icon' color='primary' onClick={increaseCount}>
          <Plus size={14} />
          <span className='align-middle ms-25'>Add Day</span>
        </Button>
        <Repeater count={count}>
          {i => (
            <Form key={i + 1}>

      <div className='d-flex justify-content-between mt-1 mb-1'>
      <div>
      <Button color='secondary'>
          Day {i + 1}
        </Button>
      </div>

      <div className='d-flex'>
      <div>
      <Button className='me-1' color='secondary'  onClick={handleModal}>
          Add New Event
        </Button>
      </div>
      <div>
      <Button color='secondary'>
          Delate Event
        </Button>
      </div>
      </div>
      </div>
        <div className='d-flex p-1 border'>
          
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.It is a long established fact that a reader will be
            distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is
            that it has a more-or-less normal distribution of letters.
          </span>
        </div>
            </Form>
          )}
        </Repeater>
            </CardBody>
          </Card>
          
        </TabPane>
        <TabPane tabId='3'>
        <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
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
        </TabPane>
        <TabPane tabId='4'>
        <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
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
        </TabPane>
        <TabPane tabId='5'>
        <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
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
        </TabPane>
        <TabPane tabId='6'>
        <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
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
        </TabPane>
      </TabContent>
      <AddNewModal open={modal} handleModal={handleModal} />
    </Fragment>
        
      </CardBody>
      </Card>

      <Sidebar
        size='lg'
        open={open}
        title='Add Payment'
        headerClassName='mb-1'
        contentClassName='p-0'
        toggleSidebar={toggleSidebar}
      >
        <Form>
          <div className='mb-2'>
            <Label for='customer-name' className='form-label'>
              Customer Name
            </Label>
            <Input id='customer-name' placeholder='John Doe' />
          </div>
          <div className='mb-2'>
            <Label for='customer-email' className='form-label'>
              Customer Email
            </Label>
            <Input type='email' id='customer-email' placeholder='example@domain.com' />
          </div>
          <div className='mb-2'>
            <Label for='customer-address' className='form-label'>
              Customer Address
            </Label>
            <Input type='textarea' cols='2' rows='2' id='customer-address' placeholder='1307 Lady Bug Drive New York' />
          </div>
          <div className='mb-2'>
            <Label for='country' className='form-label'>
              Country
            </Label>
            <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              options={countryOptions}
              isClearable={false}
            />
          </div>
          <div className='mb-2'>
            <Label for='customer-contact' className='form-label'>
              Contact
            </Label>
            <Input type='number' id='customer-contact' placeholder='763-242-9206' />
          </div>
          <div className='d-flex flex-wrap my-2'>
            <Button className='me-1' color='primary' onClick={() => setOpen(false)}>
              Add
            </Button>
            <Button color='secondary' onClick={() => setOpen(false)} outline>
              Cancel
            </Button>
          </div>
        </Form>
      </Sidebar>
    </Fragment>
  )
}

export default AddCard
