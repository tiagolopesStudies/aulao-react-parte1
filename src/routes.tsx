import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from './pages/home'
import { ReactPortalPage } from './pages/react-portal'
import { UseEffectPage } from './pages/use-effect'
import { UseStatePage } from './pages/use-state'
import { UseStateWithFunctionPage } from './pages/use-state-with-function'
import { UseStateWithObjectPage } from './pages/use-state-with-object'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/state',
    element: <UseStatePage />,
  },
  {
    path: '/state2',
    element: <UseStateWithObjectPage />,
  },
  {
    path: '/state3',
    element: <UseStateWithFunctionPage />,
  },
  {
    path: '/portal',
    element: <ReactPortalPage />,
  },
  {
    path: '/effect',
    element: <UseEffectPage />,
  },
  {
    path: '*',
    element: <HomePage />,
  },
])
