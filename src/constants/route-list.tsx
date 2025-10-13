import { ReactHookFormPage } from '@/pages/form/react-hook-form'
import { ClassComponentPage } from '@/pages/fundamentals/class-component'
import { ContextApiPage } from '@/pages/fundamentals/context'
import { CustomHooksPage } from '@/pages/fundamentals/custom-hooks'
import { ReactPortalPage } from '@/pages/fundamentals/react-portal'
import { UseEffectPage } from '@/pages/fundamentals/use-effect'
import { UseIdPage } from '@/pages/fundamentals/use-id'
import { UseReducerPage } from '@/pages/fundamentals/use-reducer'
import { UseRefPage } from '@/pages/fundamentals/use-ref'
import { UseStatePage } from '@/pages/fundamentals/use-state'
import { UseStateWithFunctionPage } from '@/pages/fundamentals/use-state-with-function'
import { UseStateWithObjectPage } from '@/pages/fundamentals/use-state-with-object'
import { HomePage } from '@/pages/home'
import { ActionsPage } from '@/pages/react19/actions'
import { UseHookPage } from '@/pages/react19/use'
import { UseWithContextPage } from '@/pages/react19/use-with-context'
import { DaisyUIPage } from '@/pages/styling/daisy-ui'
import { ShadcnUIPage } from '@/pages/styling/shadcn-ui'

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
  {
    path: '/daisy-ui',
    name: 'DaisyUiPage',
    element: <DaisyUIPage />,
  },
  {
    path: '/shadcn-ui',
    name: 'ShadcnUIPage',
    element: <ShadcnUIPage />,
  },
  {
    path: '/react-hook-form',
    name: 'ReactHookFormPage',
    element: <ReactHookFormPage />,
  },
  {
    path: '/use',
    name: 'UseHookPage',
    element: <UseHookPage />,
  },
  {
    path: '/use-with-context',
    name: 'UseWithContextPage',
    element: <UseWithContextPage />,
  },
  {
    path: '/actions',
    name: 'ActionsPage',
    element: <ActionsPage />,
  },
]
