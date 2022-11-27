import React from 'react'
import style from './styles/Message.module.css'

const Message = ({message}) => {
  return (
    <div className={style.alertContainer}>
     <p>{message}</p> 
    </div>
  )
}

export default Message