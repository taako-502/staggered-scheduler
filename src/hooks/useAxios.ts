import axios, { AxiosInstance } from 'axios'

const useAxios = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: process.env.NEXT_GRAPHQL_URL,
  })
  return instance
}

export default useAxios
