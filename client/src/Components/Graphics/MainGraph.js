import React from 'react'
import Chart from 'react-apexcharts';
import style from '../styles/Details.module.css'

const MainGraph = ({tasks}) => {
  let entradas = 0
  let saidas = 0
  
  if(tasks){
  tasks.forEach(element => {
    if(element.type === 'entrada'){
      entradas = entradas +  Number(element.value)
    }else{
      saidas = saidas +  Number(element.value)
    }
  });
  }

  return (
    <Chart
      className={style.mainGraph}
      type="donut"
      series={[entradas, saidas]}
      options={{
        labels:['Entradas', "Saidas"],
        colors:['#2ECC71', '#E74C3C'],
        tooltip: {
          y: {
            formatter: function (val) {
              return "R$" + val
            }
          }
        }
      }}
    /> 
  )
}

export default MainGraph