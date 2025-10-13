import { useState, useTransition } from 'react'
import { List } from '@/components/list'

type Tab = 'home' | 'about' | 'contact' | 'list'

function getPageComponent(tab: Tab) {
  switch (tab) {
    case 'home':
      return <div>Home Page Content</div>
    case 'about':
      return <div>About Page Content</div>
    case 'contact':
      return <div>Contact Page Content</div>
    case 'list':
      return <List />
    default:
      return null
  }
}

export function UseTransitionPage() {
  const [currentTab, setCurrentTab] = useState<Tab>('home')
  const [isPending, startTransition] = useTransition()

  function handleTabChange(tab: Tab) {
    startTransition(() => {
      setCurrentTab(tab)
    })
  }

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <h1 className="text-xl font-semibold text-center">useTransition Page</h1>
      <p className="text-center">This is a placeholder for the useTransition example.</p>

      <h2>Select the page</h2>

      <div className="flex gap-2">
        <button
          type="button"
          data-selected={currentTab === 'home'}
          className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded data-[selected=true]:bg-blue-700"
          onClick={() => handleTabChange('home')}
        >
          Home
        </button>
        <button
          type="button"
          data-selected={currentTab === 'about'}
          className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded data-[selected=true]:bg-blue-700"
          onClick={() => handleTabChange('about')}
        >
          About
        </button>
        <button
          type="button"
          data-selected={currentTab === 'contact'}
          className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded data-[selected=true]:bg-blue-700"
          onClick={() => handleTabChange('contact')}
        >
          Contact
        </button>

        <button
          type="button"
          data-selected={currentTab === 'list'}
          className="cursor-pointer px-4 py-2 bg-red-500 text-white rounded data-[selected=true]:bg-red-700"
          onClick={() => handleTabChange('list')}
        >
          List (dangerous)
        </button>
      </div>

      <div className="mt-4 w-full max-w-md border p-4 rounded shadow">
        {isPending ? (
          <div className="mb-2 text-gray-500">Loading...</div>
        ) : (
          getPageComponent(currentTab)
        )}
      </div>
    </div>
  )
}
