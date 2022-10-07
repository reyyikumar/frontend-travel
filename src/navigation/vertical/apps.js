// ** Icons Import
import {Package, Dribbble, Layers, Box, Circle, Grid, Users, Command, CreditCard, Table, PieChart, XOctagon, MapPin, Share2} from 'react-feather'

export default [
  {
    id: 'booking',
    title: 'Bookings',
    icon: <Grid size={20} />,
    children: [
      {
        id: 'booking',
        title: 'Hotel',
        icon: <Circle size={12} />,
        navLink: '/apps/Booking/Hotel'
      },
      {
        id: 'invoicePreview',
        title: 'Flights',
        icon: <Circle size={12} />,
        navLink: '/apps/Booking/Flights'
      },
      {
        id: 'invoiceEdit',
        title: 'Buses',
        icon: <Circle size={12} />,
        navLink: '/apps/Booking/Buses'
      },
      {
        id: 'invoiceAdd',
        title: 'Package',
        icon: <Circle size={12} />,
        navLink: '/apps/invoice/add'
      }
    ]
  },

  {
    id: 'packages',
    title: 'Packages',
    icon: <Package size={20} />,
    navLink: '/apps/Packages'
  },

  // {
  //   id: 'roles-permissions',
  //   title: 'Itenary',
  //   icon: <Command size={20} />
  // },
  {
    id: 'offers',
    title: 'Offers',
    icon: <Box size={20} />,
    navLink: '/apps/Offers'
  },
  {
    id: 'users',
    title: 'Users',
    icon: <Users size={20} />,
    navLink: '/apps/Users'
  },
  {
    id: 'Enquiry Management',
    title: 'Enquiry Management',
    icon: <Dribbble size={20} />,
    navLink: '/apps/EnquiryManagement'
  },
  {
    id: 'follow up',
    title: 'Follow Up',
    icon: <Layers size={20} />,
    navLink: '/apps/FollowUp'
  },
  {
    id: 'payments',
    title: 'Payments',
    icon: <CreditCard size={12} />,
    navLink: '/apps/Payments'
  },
  {
    id: 'invoices',
    title: 'Invoices',
    icon: <Table size={12} />,
    navLink: '/apps/Invoices'
  },
  {
    id: 'AddSubAgents',
    title: 'Add Sub-Agents',
    icon: <PieChart size={20} />,

    navLink: '/apps/AddSubAgents'
  },
  {
    id: 'tablesReactstrap',
    title: 'Reports',
    icon: <XOctagon size={20} />,
    navLink: '/tables/reactstrap'
  },
  {
    id: 'charts',
    title: 'FAQ',
    badge: 'light-danger',
    icon: <MapPin size={20} />
  },
  {
    id: 'contact us',
    title: 'Contact Us',
    icon: <Share2 size={12} />,
    navLink: '/apps/ContactUs'
  }


]
