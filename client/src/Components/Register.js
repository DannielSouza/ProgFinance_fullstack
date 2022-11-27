import React from 'react'
import { context } from '../context/UserContext'
import Message from './Message'
import style from './styles/RegisterAndLogin.module.css'


const Register = () => {
  const {register} = React.useContext(context)
  const [user, setUser] = React.useState()
  const [error, setError] = React.useState()
  const [loading, setLoading] = React.useState()
  const [message, setMessage] = React.useState()

  function userChange({target}){
    setUser({
      ...user,
      [target.id]: target.value
    })
  }

  async function registerUser(event){
    event.preventDefault()
    const data = await register(user, setError, setLoading)
    setMessage(data)
  }

  return (
    <>
    {error && <Message message={message}/>}

    <form onSubmit={registerUser} className={style.container}>
      <h2 className={style.title}>Registre-se</h2>

      <label className={style.label} htmlFor='name'>Nome</label>
      <input autoComplete="off" className={style.input} id='name' placeholder='Daniel' type='text' onChange={userChange} />

      <label className={style.label} htmlFor='email'>E-mail</label>
      <input autoComplete="off" className={style.input} id='email' placeholder='daniel@teste.com' type='email' onChange={userChange} />

      <label className={style.label} htmlFor='password'>Senha</label>
      <input className={style.input} id='password' placeholder='*******' type='password' onChange={userChange} />

      <label className={style.label} htmlFor='confirmpassword'>Confirmação de senha</label>
      <input className={style.input} id='confirmpassword' placeholder='*******' type='password' onChange={userChange} />


      {loading? <button disabled className={style.button}>Carregando</button> : <button className={style.button}>Cadastrar</button>}

    </form>
    </>
  )
}

export default Register