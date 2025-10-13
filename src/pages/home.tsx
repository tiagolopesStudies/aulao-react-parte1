import { ROUTE_LIST } from '../constants/route-list'

export function HomePage() {
  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <h1 className="text-xl font-semibold text-center">Home Page</h1>
      <p className="text-center">Welcome to the Home Page!</p>

      <h2 className="text-lg font-semibold">All pages:</h2>

      <ul className="list-disc pl-5">
        {ROUTE_LIST.map((route) => (
          <li key={route.path} className="hover:underline">
            <a href={route.path}>{route.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
