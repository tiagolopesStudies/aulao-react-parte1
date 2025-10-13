import { useContext, useState } from 'react'
import { UserContext } from '@/context/user-context'

export function ContextApiPage() {
  const { user, updateUser } = useContext(UserContext)
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    updateUser({ name, email })
  }

  return (
    <main>
      <h1>Context API</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        </tbody>
      </table>

      <form method="post" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <button type="submit">Update</button>
      </form>
    </main>
  )
}
