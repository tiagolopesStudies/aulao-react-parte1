import { useActionState } from 'react'

function increment(current: number) {
  return new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(current + 1)
    }, 1000)
  })
}

export function UseActionStatePage() {
  const [state, stateTransition] = useActionState(increment, 0)

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <h1 className="text-xl font-semibold text-center">Use Action State Page</h1>

      <div className="text-2xl font-semibold">Count: {state}</div>

      <form>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer disabled:opacity-50"
          formAction={stateTransition}
        >
          Increment
        </button>
      </form>
    </div>
  )
}
