import React from 'react'
import api from './api';

export default function useAuth(){
  const [authenticated, setAuthenticated] = React.useState(false)
  const {registerUser, loginUser} = api()

  /* VERIFY TOKEN AUTOMATICALLY */
  React.useEffect(()=>{
    const token = localStorage.getItem('token')

    if(token){
      setAuthenticated(true)
    }
  },[])


  /* AUTH USER */
  async function authUser(data){
    setAuthenticated(true)
    localStorage.setItem('token', JSON.stringify(data.token))
  }


  /* USER REGISTER */
  async function register(user , setError, setLoading){
    try {
      setLoading(true)
      setError(false)
      var data = await registerUser(user)
      await authUser(data)
    } catch (error) {
      setError(true)
      return (error.response.data.message)
    }finally{
      setLoading(false)
    }
  }



  /* USER LOGIN */
  async function login(user, setError, setLoading){
    try {
      setLoading(true)
      setError(false)
      const data = await loginUser(user)
      await authUser(data)
    } catch (error) {
      setError(true)
      return (error.response.data.message)
    }finally{
      setLoading(false)
    }
  }


  async function logout(){
    setAuthenticated(false)
    localStorage.removeItem('token')
  }



  return {register, login, authenticated, logout}
}