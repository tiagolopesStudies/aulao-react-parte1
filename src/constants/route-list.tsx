import * as page from '@/pages'

type Route = {
  path: string
  name: string
  element: React.ReactNode
}

export const ROUTE_LIST: Route[] = [
  {
    path: '/',
    name: 'HomePage',
    element: <page.HomePage />,
  },
  {
    path: '/state',
    name: 'UseStatePage',
    element: <page.UseStatePage />,
  },
  {
    path: '/state2',
    name: 'UseStateWithObjectPage',
    element: <page.UseStateWithObjectPage />,
  },
  {
    path: '/state3',
    name: 'UseStateWithFunctionPage',
    element: <page.UseStateWithFunctionPage />,
  },
  {
    path: '/portal',
    name: 'ReactPortalPage',
    element: <page.ReactPortalPage />,
  },
  {
    path: '/context',
    name: 'UseContextPage',
    element: <page.ContextApiPage />,
  },
  {
    path: '/effect',
    name: 'UseEffectPage',
    element: <page.UseEffectPage />,
  },
  {
    path: '/reducer',
    name: 'UseReducerPage',
    element: <page.UseReducerPage />,
  },
  {
    path: '/ref',
    name: 'UseRefPage',
    element: <page.UseRefPage />,
  },
  {
    path: '/custom-hooks',
    name: 'CustomHooksPage',
    element: <page.CustomHooksPage />,
  },
  {
    path: '/use-id',
    name: 'UseIdPage',
    element: <page.UseIdPage />,
  },
  {
    path: '/class-component',
    name: 'ClassComponentPage',
    element: <page.ClassComponentPage />,
  },
  {
    path: '/daisy-ui',
    name: 'DaisyUiPage',
    element: <page.DaisyUIPage />,
  },
  {
    path: '/shadcn-ui',
    name: 'ShadcnUIPage',
    element: <page.ShadcnUIPage />,
  },
  {
    path: '/react-hook-form',
    name: 'ReactHookFormPage',
    element: <page.ReactHookFormPage />,
  },
  {
    path: '/use',
    name: 'UseHookPage',
    element: <page.UseHookPage />,
  },
  {
    path: '/use-with-context',
    name: 'UseWithContextPage',
    element: <page.UseWithContextPage />,
  },
  {
    path: '/actions',
    name: 'ActionsPage',
    element: <page.ActionsPage />,
  },
  {
    path: '/use-action-state',
    name: 'UseActionStatePage',
    element: <page.UseActionStatePage />,
  },
  {
    path: '/use-transition',
    name: 'UseTransitionPage',
    element: <page.UseTransitionPage />,
  },
  {
    path: '/motion',
    name: 'MotionPage',
    element: <page.MotionPage />,
  },
  {
    path: '/motion-keyframes',
    name: 'MotionKeyframesPage',
    element: <page.MotionKeyframesPage />,
  },
]
