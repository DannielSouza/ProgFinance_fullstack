import React from 'react'
import Chart from 'react-apexcharts';
import style from '../styles/Details.module.css'

const LineGraphOut = ({tasks}) => {
  let saidasJaneiro = 0
  let saidasFervereiro = 0
  let saidasMarço = 0
  let saidasAbril = 0
  let saidasMaio = 0
  let saidasJunho = 0
  let saidasJulho = 0
  let saidasAgosto = 0
  let saidasSetembro = 0
  let saidasOutubro = 0
  let saidasNovembro = 0
  let saidasDezembro = 0

  if(tasks){
    tasks.forEach((item)=>{
      if(item.type === 'saida'){
        const thisItem = item.date.substr(3,2)
        if(thisItem === '01') saidasJaneiro = saidasJaneiro + Number(item.value)
        if(thisItem === '02') saidasFervereiro = saidasFervereiro + Number(item.value)
        if(thisItem === '03') saidasMarço = saidasMarço + Number(item.value)
        if(thisItem === '04') saidasAbril = saidasAbril + Number(item.value)
        if(thisItem === '05') saidasMaio = saidasMaio + Number(item.value)
        if(thisItem === '06') saidasJunho = saidasJunho + Number(item.value)
        if(thisItem === '07') saidasJulho = saidasJulho + Number(item.value)
        if(thisItem === '08') saidasAgosto = saidasAgosto + Number(item.value)
        if(thisItem === '09') saidasSetembro = saidasSetembro + Number(item.value)
        if(thisItem === '10') saidasOutubro = saidasOutubro + Number(item.value)
        if(thisItem === '11') saidasNovembro = saidasNovembro + Number(item.value)
        if(thisItem === '12') saidasDezembro = saidasDezembro + Number(item.value)
      }
    })

  }

  return (
    <Chart
      type='line'
      className={style.monthGraph}


      series={[
        {
          name:"Saidas",
          data:[ 
            saidasJaneiro, 
            saidasFervereiro, 
            saidasMarço, 
            saidasAbril, 
            saidasMaio,
            saidasJunho,
            saidasJulho,
            saidasAgosto,
            saidasSetembro,
            saidasOutubro,
            saidasNovembro,
            saidasDezembro],
            color:'#E74C3C'
        },]}

      options={{

        xaxis:{
          categories:[
            "Janeiro",
            "Fervereiro",
            "Março",
            "Abril",
            "Maio",
            "Junho",
            "Julho",
            "Agosto",
            "Setembro",
            "Outubro",
            "Novembro",
            "Dezembro"
          ]
        },

        stroke: {
          curve: 'smooth'
        },


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

export default LineGraphOut