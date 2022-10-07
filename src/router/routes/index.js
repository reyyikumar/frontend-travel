// ** Routes Imports
import AppRoutes from './Apps'
import DashboardRoutes from './Dashboards'
import PageLayoutsRoutes from './PageLayouts'
import BookingRoutes from './Booking'

// ** Document title
const TemplateTitle = '%s - Vuexy React Admin Template'

// ** Default Route
const DefaultRoute = '/dashboard/ecommerce'

// ** Merge Routes
const Routes = [
  ...DashboardRoutes,
  ...AppRoutes,
  ...PageLayoutsRoutes,
  ...BookingRoutes

]

export { DefaultRoute, TemplateTitle, Routes }
