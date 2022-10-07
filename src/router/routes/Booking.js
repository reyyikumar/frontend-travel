import { lazy } from "react"

const PagesRoutes = [
  {
    path: "/apps/Booking/Hotel",
    component: lazy(() => import("../../views/apps/Booking/Hotel"))
  },
  {
    path: "/apps/Booking/Flights",
    component: lazy(() => import("../../views/apps/Booking/Flights"))
  },
  {
    path: "/apps/Booking/Buses",
    component: lazy(() => import("../../views/apps/Booking/Buses"))
  }
]

export default PagesRoutes
