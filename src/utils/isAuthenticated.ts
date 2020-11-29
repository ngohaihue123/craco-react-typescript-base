const isTokenExpired = (token: string) => {
  // TODO: check is expired token

  return false
}

const isAuthenticated = (token: string, role: string) => {
  // return !!state.auth.token && !isTokenExpired(state.auth.token);
  //   const user = cookies.cookies.user
  //   if (!!user && role === user.role) {
  //     return true
  //   }

  return false
}

export default isAuthenticated
