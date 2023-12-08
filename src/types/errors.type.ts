type GraphQLValidationError = {
  message: string
  path: string[]
  extensions: {
    code: string
  }
}

type GqlErrorResponse = {
  data: null
  errors: GraphQLValidationError[]
}

export const isGqlErrorResponse = (error: any): error is GqlErrorResponse => {
  return (
    error != null &&
    typeof error === 'object' &&
    'data' in error &&
    error.data === null &&
    'errors' in error &&
    Array.isArray(error.errors) &&
    error.errors.every(
      (err: any) =>
        'message' in err &&
        typeof err.message === 'string' &&
        'path' in err &&
        Array.isArray(err.path) &&
        err.path.every((p) => typeof p === 'string') &&
        'extensions' in err &&
        typeof err.extensions === 'object' &&
        'code' in err.extensions &&
        typeof err.extensions.code === 'string',
    )
  )
}
