import React from 'react'
import style from './styles/RegisterAndLogin.module.css'
import { context } from '../context/UserContext'
import Message from './Message'


const Login = ({setLoginOrRegister}) => {
  const {login} = React.useContext(context)

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState(false)
  const [message, setMessage] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [user, setUser] = React.useState({})

  React.useEffect(()=>{
    setUser({email,password})
  },[email, password])

  async function loginUser(event){
    event.preventDefault()
    const data = await login(user, setError, setLoading)
    setMessage(data)
  }

  return (
    <>
    {error && <Message message={message}/>}
    

    <form onSubmit={loginUser} className={style.container}>
      <h2 className={style.title}>Entrar</h2>

      <label className={style.label} htmlFor='loginEmail'>E-mail</label>
      <input autoComplete="off" className={style.input} id='loginEmail' placeholder='daniel@teste.com' type='email' value={email} onChange={({target})=>setEmail(target.value)}/>

      <label className={style.label} htmlFor='loginPassword'>Senha</label>
      <input autoComplete="off" className={style.input} id='loginPassword' placeholder='*******' type='password' value={password} onChange={({target})=>setPassword(target.value)}/>

      <div className={style.footerDiv}>
        {loading? <button disabled className={style.button}>Carregando</button> : <button className={style.button}>Entrar</button>}
        <p>Não possui conta? <span onClick={()=>setLoginOrRegister(false)}>Registre-se</span></p>
      </div>

    </form>
    </>
  )
}

export default Login