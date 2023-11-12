import { User } from '@/types/user.type'
import { useState, createContext, ReactNode } from 'react'

interface UserContextType {
  user: User
  setUser: React.Dispatch<React.SetStateAction<User>>
}

export const UserContext = createContext<UserContextType>({
  user: {
    id: '',
    username: '',
    passwordHash: '',
    isAdmin: false,
    createdAt: '',
    updatedAt: '',
  },
  setUser: () => {},
})

interface ProviderProps {
  children: ReactNode
}

export const UserProvider = ({ children }: ProviderProps) => {
  const [user, setUser] = useState<User>({
    id: '',
    username: '',
    passwordHash: '',
    isAdmin: false,
    createdAt: '',
    updatedAt: '',
  })

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
