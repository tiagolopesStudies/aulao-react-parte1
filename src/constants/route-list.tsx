import { ClassComponentPage } from '../pages/class-component'
import { ContextApiPage } from '../pages/context'
import { CustomHooksPage } from '../pages/custom-hooks'
import { HomePage } from '../pages/home'
import { ReactPortalPage } from '../pages/react-portal'
import { UseEffectPage } from '../pages/use-effect'
import { UseIdPage } from '../pages/use-id'
import { UseReducerPage } from '../pages/use-reducer'
import { UseRefPage } from '../pages/use-ref'
import { UseStatePage } from '../pages/use-state'
import { UseStateWithFunctionPage } from '../pages/use-state-with-function'
import { UseStateWithObjectPage } from '../pages/use-state-with-object'

type Route = {
  path: string
  name: string
  element: React.ReactNode
}

export const ROUTE_LIST: Route[] = [
  {
    path: '/',
    name: 'HomePage',
    element: <HomePage />,
  },
  {
    path: '/state',
    name: 'UseStatePage',
    element: <UseStatePage />,
  },
  {
    path: '/state2',
    name: 'UseStateWithObjectPage',
    element: <UseStateWithObjectPage />,
  },
  {
    path: '/state3',
    name: 'UseStateWithFunctionPage',
    element: <UseStateWithFunctionPage />,
  },
  {
    path: '/portal',
    name: 'ReactPortalPage',
    element: <ReactPortalPage />,
  },
  {
    path: '/context',
    name: 'UseContextPage',
    element: <ContextApiPage />,
  },
  {
    path: '/effect',
    name: 'UseEffectPage',
    element: <UseEffectPage />,
  },
  {
    path: '/reducer',
    name: 'UseReducerPage',
    element: <UseReducerPage />,
  },
  {
    path: '/ref',
    name: 'UseRefPage',
    element: <UseRefPage />,
  },
  {
    path: '/custom-hooks',
    name: 'CustomHooksPage',
    element: <CustomHooksPage />,
  },
  {
    path: '/use-id',
    name: 'UseIdPage',
    element: <UseIdPage />,
  },
  {
    path: '/class-component',
    name: 'ClassComponentPage',
    element: <ClassComponentPage />,
  },
]
