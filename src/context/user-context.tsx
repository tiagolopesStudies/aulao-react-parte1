import { createContext, useState } from 'react'

interface User {
  name: string
  email: string
}

interface UserContextProps {
  user: User
  updateUser: (newUser: User) => void
}

export const UserContext = createContext<UserContextProps>({} as UserContextProps)

export function UserContextProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(() => {
    const storedUser = localStorage.getItem('@react-course:user')
    return storedUser
      ? JSON.parse(storedUser)
      : { name: 'John Doe', email: 'john.doe@example.com' }
  })

  function updateUser(newUser: User) {
    setUser(newUser)
    localStorage.setItem('@react-course:user', JSON.stringify(newUser))
  }

  return (
    <UserContext.Provider value={{ user, updateUser }}>{children}</UserContext.Provider>
  )
}
