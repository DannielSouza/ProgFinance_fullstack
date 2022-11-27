import React from 'react'
import style from './styles/InputField.module.css'
import close from '../assets/close.png'
import api from '../helpers/api'

const InputField = ({tasks, setTasks, setIsModalOpen, setUpdateCounts}) => {
  const [desc, setDesc] = React.useState('')
  const [value, setValue] = React.useState('')
  const [select, setSelect] = React.useState('')
  const [outType, setOutType] = React.useState('')
  const [date, setDate] = React.useState('')
  const token = JSON.parse(localStorage.getItem('token'))
  let formatedDate
  let formatedDateUSA

  const {createCount} = api()

  

  function handleSubmit(event){
    event.preventDefault()
    const day = date.substr(8,2)
    const month = date.substr(5,2)
    const year = date.substr(0,4)


    formatedDate = day + "/" + month + "/" + year
    formatedDateUSA = month + "/" + day + "/" + year
    let timeStamp = new Date(formatedDateUSA).getTime()

    const task = {
      "title": `${desc}`,
      "value": `${value}`,
      "type": `${select}`,
      "typeOut": `${outType}`,
      "date": `${formatedDate}`,
      "timestamp": `${timeStamp}`
    }
    
    createCount(task, token)

    setDesc('')
    setValue('')
    setSelect('')
    setOutType('')
    setDate('')
    setUpdateCounts((prev)=>prev+1)
    setIsModalOpen(false)
  }


  return (
    <section className={style.mainContainer}>
      <form className={style.container} onSubmit={handleSubmit}>

      <img onClick={()=>setIsModalOpen(false)} id={style.closeModal} src={close}  alt='fechar modal'/>

        <input 
        autoComplete='off'
        className={style.input}
        id='desc'
        type='text' 
        placeholder='Ex:Salario'
        required
        value={desc} 
        onChange={({target})=> setDesc(target.value)} />
        
        <input 
        className={style.input}
        id='value'
        type='number' 
        placeholder='Ex:R$1200.00'
        required
        max="99000"
        value={value} 
        onChange={({target})=> setValue(target.value)}/>

        <select 
        className={style.select}
        id='type'
        value={select} 
        onChange={({target})=> setSelect(target.value)}
        required
        >
          <option disabled value="">Selecione</option>
          <option value="entrada">Entrada</option>
          <option value="saida">Despesa</option>
        </select>

        {select === 'saida' && 
          <select 
          className={style.selectOut}
          id='outType'
          value={outType} 
          onChange={({target})=> setOutType(target.value)}
          required
          >
            <option disabled value="">Selecione</option>
            <option value="despesasMensais">Despesas mensais</option>
            <option value="estudos">Estudos</option>
            <option value="saude">Saude</option>
            <option value="entretenimento">Entretenimento</option>
            <option value="alimentacao">Alimentação</option>
            <option value="outros">Outras despesas</option>
          </select>
        }


        <input
        className={style.date}
        id={style.date}
        type='date'
        value={date} 
        onChange={({target})=>setDate(target.value)}
        required
        />

        

        <button className={style.button}>Enviar</button>
      </form>    
    </section>
  )
}

export default InputField