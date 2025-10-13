import { createBrowserRouter } from 'react-router-dom'
import { ROUTE_LIST } from './constants/route-list'

export const routes = createBrowserRouter(
  ROUTE_LIST.map((route) => ({
    path: route.path,
    element: route.element,
  }))
)
