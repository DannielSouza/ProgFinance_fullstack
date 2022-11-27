import axios from 'axios'
const BASE_URL = 'http://localhost:4000'

export default function api(){
  async function registerUser(user){
    const response = await axios.post(`${BASE_URL}/user/register`,user)
    const data = response.data
    return data
  }

  
  async function loginUser(user){
    const response = await axios.post(`${BASE_URL}/user/login`,user)
    const data = response.data
    return data
  }


  async function checkUser(token){
    const response = await axios.post(`${BASE_URL}/user/check`,null,{
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    const data = await response.data

    return data
  }


  async function createCount(count, token){
    const response  = await axios.post(`${BASE_URL}/count/create`, count,{
      headers:{
        Authorization: `Bearer ${token}`,
      }
    })
    const data = await response.data

    return data
  }



  async function getCounts(token){
    const response  = await axios.get(`${BASE_URL}/count/`, {
      headers:{
        Authorization: `Bearer ${token}`,
      }
    })
    const data = await response.data
    
    return data
  }


  return {registerUser, loginUser, checkUser, createCount, getCounts}
}