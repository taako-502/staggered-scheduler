import React from 'react'

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => {
  return <p className="text-red-500">{message}</p>
}

export default ErrorMessage
