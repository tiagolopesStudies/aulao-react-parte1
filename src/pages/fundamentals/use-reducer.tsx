import { useReducer } from 'react'

interface UseReducerState {
  count: number
}

interface UseReducerAction {
  type: 'increment' | 'decrement' | 'reset'
}

function reducer(state: UseReducerState, action: UseReducerAction) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 }
    case 'decrement':
      if (state.count === 0) {
        return state
      }
      return { ...state, count: state.count - 1 }
    case 'reset':
      return { ...state, count: 0 }
    default:
      return state
  }
}

export function UseReducerPage() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  return (
    <main>
      <h1>Use Reducer</h1>
      <div>
        <p>Count: {state.count}</p>
        <div style={{ display: 'flex', gap: 8 }}>
          <button type="button" onClick={() => dispatch({ type: 'increment' })}>
            Increment
          </button>
          <button type="button" onClick={() => dispatch({ type: 'decrement' })}>
            Decrement
          </button>
          <button type="button" onClick={() => dispatch({ type: 'reset' })}>
            Reset
          </button>
        </div>
      </div>
    </main>
  )
}
