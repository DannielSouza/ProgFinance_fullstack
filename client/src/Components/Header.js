import React from 'react'
import { context } from '../context/UserContext'
import Login from './Login'
import LogScreen from './LogScreen'
import Message from './Message'
import Register from './Register'
import Resume from './Resume'
import style from './styles/Header.module.css'


const Header = ({tasks, setTasks, user, setLogin}) => {
  const {authenticated, logout} = React.useContext(context)
  setLogin(authenticated)
  const [message, setMessage] = React.useState(null)

  if(user) {
    var formatName = user.name[0].toUpperCase() + user.name.substring(1)
  }
  


  if(authenticated) return (
    <header className={style.header}>
      <div className={style.container}>
        {user? <h1>Olá, {formatName}!</h1> : <h1>Olá!</h1>}

        
        <Resume tasks={tasks} setTasks={setTasks}/>

      </div>
      <button onClick={logout} className={style.logoutButton}>Sair</button>
    </header>
  )
  return(
    <div className={style.noLogged}>
      {message && <Message message={message}/>}
      
      <LogScreen/>
      
    </div>
  )
}

export default Header