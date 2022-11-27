import React from 'react'
import style from './styles/Resume.module.css'

const Resume = ({tasks}) => {
  let total = 0
  let entradas = 0
  let saidas = 0

  if(tasks){
  tasks.forEach(element => {
    if(element.type === 'entrada')total = total + Number(element.value)
    if(element.type === 'saida')total = total - Number(element.value)
  })}

  if(tasks){
    tasks.forEach((element)=>{
      if(element.type === 'entrada'){
        entradas = entradas + Number(element.value)
      }
    })
  }

  if(tasks){
    tasks.forEach((element)=>{
      if(element.type === 'saida'){
        saidas = saidas + Number(element.value)
      }
    })
  }


  if(tasks) return (
    <section className={style.container}>
      <div id={style.total} className={style.item}><span style={total >= 0 ?{color:'#2ECC71'} : {color: '#E74C3C'}} >R${total.toFixed(2)}</span></div>
      <div className={style.item}>Entradas <span style={{color: '#2ECC71'}} >R${entradas.toFixed(2)}</span></div>
      <div className={style.item}>Saidas <span style={{color: '#E74C3C'}} >R$-{saidas.toFixed(2)}</span></div>
    </section>
  ) 
  return (
    <section className={style.container}>
      <div id={style.total} className={style.item}><span style={total >= 0 ?{color:'#2ECC71'} : {color: '#E74C3C'}} >R$0.00</span></div>
      <div className={style.item}>Entradas <span style={{color: '#2ECC71'}} >R$0.00</span></div>
      <div className={style.item}>Saidas <span style={{color: '#E74C3C'}} >R$-0.00</span></div>
    </section>
  ) 
}

export default Resume