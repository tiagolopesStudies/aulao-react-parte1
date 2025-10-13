import { Suspense } from 'react'
import { FetchTodo } from '@/components/fetch-todo'

export function UseHookPage() {
  return (
    <div className="flex flex-col items-center p-4 gap-4">
      <h1 className="font-semibold text-3xl">Use Hook Page</h1>
      <p className="mt-4">
        This page demonstrates the use of the `use` hook in React 19.
      </p>

      <Suspense fallback={<div>Loading...</div>}>
        <FetchTodo />
      </Suspense>
    </div>
  )
}
