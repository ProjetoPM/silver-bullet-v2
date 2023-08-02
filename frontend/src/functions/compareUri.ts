export function compareUri(uri: string) {
  const _uri = window.location.pathname
  const route = `/${_uri.split('/')[1]}`

  if (route === uri) {
    return true
  }
  return false
}

export function compareUriNumber(uri: string, number: number) {
  const _uri = window.location.pathname
  const route = `./${_uri.split('/')[number]}`

  if (route === uri) {
    return true
  }
  return false
}
