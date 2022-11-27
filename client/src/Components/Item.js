import React from 'react'
import style from './styles/Item.module.css'
import trash from '../assets/delete.png'
import api from '../helpers/api'

const Item = ({task, setUpdateCounts}) => {
  const {id, title, type, value, date} = task
  const {deleteCount} = api()
  const token = JSON.parse(localStorage.getItem('token'))

  async function deleteItem(){
    let question = window.confirm("Deseja excluir o item?")
    if(question){
      await deleteCount(token, id)
      setUpdateCounts((prev)=> prev+1)
    }
    else{
      return
    }
  }

  return (
    <li className={style.container}>
      <div className={style.mainInfo}>
        <p id={style.date}>{date}</p>
        <p id={style.desc}>{title}</p>
      </div>

      <div className={style.value}>
        <span>{type === 'entrada'? <span style={{color: '#239B56', fontWeight: 'bold'}}>R${Number(value)}</span>: <span style={{color: '#E74C3C', fontWeight: 'bold'}}>R$-{Number(value)}</span>}</span>
        <img id={id} onClick={deleteItem} src={trash} alt="delelete item"/>
      </div>

    </li>
  )
}

export default Item