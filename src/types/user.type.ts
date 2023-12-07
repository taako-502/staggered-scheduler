export type User = {
  id?: string
  username: string
  passwordHash?: string
  isAdmin?: boolean
  createdAt?: string
  updatedAt?: string
}

// GraphQLから返ってくるデータの型を定義する
export const isGraphQLUser = (obj: any): obj is User => {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    typeof obj.id === 'string' &&
    typeof obj.username === 'string' &&
    obj.__typename === 'User'
  )
}
