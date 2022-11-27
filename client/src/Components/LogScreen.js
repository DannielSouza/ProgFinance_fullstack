import React from 'react'
import Register from './Register'
import Login from './Login'
import style from './styles/LogScreen.module.css'

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