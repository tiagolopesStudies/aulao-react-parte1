import { createContext, type FC, type ReactNode, useState } from 'react'

interface User {
  name: string
  email: string
}

interface UserContextProps {
  user: User
  updateUser: (newUser: User) => void
}

interface UserContextProviderProps {
  children: ReactNode
}

export const UserContext = createContext<UserContextProps>({} as UserContextProps)

export const UserContextProvider: FC<UserContextProviderProps> = ({ children }) => {
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
