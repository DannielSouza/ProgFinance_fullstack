import React from 'react'
import Register from './Register'
import Login from './Login'

const LogScreen = () => {
  const [loginOrRegister, setLoginOrRegister] = React.useState(true)


  if(loginOrRegister)return (
    < >
      <Login setLoginOrRegister={setLoginOrRegister} />
    </>
  )
  return (
    <Register setLoginOrRegister={setLoginOrRegister} />
  )
}

export default LogScreen