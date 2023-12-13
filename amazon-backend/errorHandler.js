export const errorHandler = (code, text) => {
  const error = new Error()
  error.statusCode = code
  error.message = text
  return error
}
