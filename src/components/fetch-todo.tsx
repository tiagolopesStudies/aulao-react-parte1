import { use } from 'react'

interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

async function fetchTodo() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  if (!response.ok) {
    throw new Error('Failed to fetch todo')
  }
  const todo = (await response.json()) as Todo
  return todo
}

const todoPromise = fetchTodo()

export function FetchTodo() {
  const data = use(todoPromise)

  return (
    <div>
      <h1 className="font-semibold text-3xl">Fetch Todo</h1>
      <div className="flex flex-col gap-1">
        <span>{data.title}</span>
        <span>{data.completed ? '✅' : '❌'}</span>
      </div>
    </div>
  )
}
