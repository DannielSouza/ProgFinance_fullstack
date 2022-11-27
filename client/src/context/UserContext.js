import React from 'react'
import useAuth from '../helpers/useAuth'

const context = React.createContext()

const UserProvider = ({children})=>{
  const {register, authenticated, logout, login} = useAuth()

  return(
    <context.Provider value={{register, authenticated, logout, login}}>
      {children}
    </context.Provider>
  )
}

export {context, UserProvider}