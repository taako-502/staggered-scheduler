export const signout = () => {
  localStorage.removeItem('uuid')
  window.location.reload()
}
