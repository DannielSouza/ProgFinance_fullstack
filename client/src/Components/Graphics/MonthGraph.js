import React from 'react'
import Chart from 'react-apexcharts';
import style from '../styles/Details.module.css'

const MonthGraph = ({tasks}) => {
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

  let entradasJaneiro = 0
  let entradasFervereiro = 0
  let entradasMarço = 0
  let entradasAbril = 0
  let entradasMaio = 0
  let entradasJunho = 0
  let entradasJulho = 0
  let entradasAgosto = 0
  let entradasSetembro = 0
  let entradasOutubro = 0
  let entradasNovembro = 0
  let entradasDezembro = 0

  


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
      if(item.type === 'entrada'){
        const thisItem = item.date.substr(3,2)
        if(thisItem === '01') entradasJaneiro = entradasJaneiro + Number(item.value)
        if(thisItem === '02') entradasFervereiro = entradasFervereiro + Number(item.value)
        if(thisItem === '03') entradasMarço = entradasMarço + Number(item.value)
        if(thisItem === '04') entradasAbril = entradasAbril + Number(item.value)
        if(thisItem === '05') entradasMaio = entradasMaio + Number(item.value)
        if(thisItem === '06') entradasJunho = entradasJunho + Number(item.value)
        if(thisItem === '07') entradasJulho = entradasJulho + Number(item.value)
        if(thisItem === '08') entradasAgosto = entradasAgosto + Number(item.value)
        if(thisItem === '09') entradasSetembro = entradasSetembro + Number(item.value)
        if(thisItem === '10') entradasOutubro = entradasOutubro + Number(item.value)
        if(thisItem === '11') entradasNovembro = entradasNovembro + Number(item.value)
        if(thisItem === '12') entradasDezembro = entradasDezembro + Number(item.value)
      }
    })

  }

  return (
    <Chart
      type='bar'
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
        },
        {
          name:"Entradas",
          data:[ 
            entradasJaneiro, 
            entradasFervereiro, 
            entradasMarço, 
            entradasAbril, 
            entradasMaio,
            entradasJunho,
            entradasJulho,
            entradasAgosto,
            entradasSetembro,
            entradasOutubro,
            entradasNovembro,
            entradasDezembro],
            color:'#2ECC71'
        }]}

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

export default MonthGraph