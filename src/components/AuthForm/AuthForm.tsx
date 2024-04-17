import React from 'react'

const AuthForm = () => {
  return (
    <form>
    <label htmlFor="login">Login</label>
    <input id="login" type="text"/>
    <label htmlFor="password">Password</label>
    <input type="password" name="" id="password" />
    <input type="submit" value="Sign Up" />
  </form>
  )
}

export default AuthForm