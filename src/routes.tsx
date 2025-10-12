import { createBrowserRouter } from 'react-router-dom'
import { ClassComponentPage } from './pages/class-component'
import { ContextApiPage } from './pages/context'
import { CustomHooksPage } from './pages/custom-hooks'
import { HomePage } from './pages/home'
import { ReactPortalPage } from './pages/react-portal'
import { UseEffectPage } from './pages/use-effect'
import { UseIdPage } from './pages/use-id'
import { UseReducerPage } from './pages/use-reducer'
import { UseRefPage } from './pages/use-ref'
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
    path: '/context',
    element: <ContextApiPage />,
  },
  {
    path: '*',
    element: <HomePage />,
  },
  {
    path: '/reducer',
    element: <UseReducerPage />,
  },
  {
    path: '/ref',
    element: <UseRefPage />,
  },
  {
    path: '/custom-hooks',
    element: <CustomHooksPage />,
  },
  {
    path: '/use-id',
    element: <UseIdPage />,
  },
  {
    path: '/class-component',
    element: <ClassComponentPage />,
  },
])
