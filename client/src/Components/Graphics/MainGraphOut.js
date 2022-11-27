import React from 'react'
import Chart from 'react-apexcharts';
import style from '../styles/Details.module.css'

const MainGraph = ({tasks}) => {
  var despesasMensais = 0
  var estudos = 0
  var saude = 0
  var entretenimento = 0
  var alimentacao = 0
  var outros = 0

  if(tasks){
  tasks.forEach(element => {
    if(element.type === "saida"){
      if(element.typeOut === "despesasMensais") despesasMensais = despesasMensais + Number(element.value)
      if(element.typeOut === "estudos") estudos = estudos + Number(element.value) 
      if(element.typeOut === "saude") saude = saude + Number(element.value) 
      if(element.typeOut === "entretenimento") entretenimento = entretenimento + Number(element.value)
      if(element.typeOut === "alimentacao") alimentacao = alimentacao + Number(element.value) 
      if(element.typeOut === "outros") outros = outros + Number(element.value) 
    }
  });


  }


    if(despesasMensais || estudos || saude || entretenimento || alimentacao || outros)return (
    <Chart
      className={style.mainGraph}
      type="donut"
      series={[despesasMensais, estudos, saude, entretenimento, alimentacao, outros]}
      options={{
        labels:['Despesas mensais', "Estudos", "Saude", "Entretenimento", "Alimentação", "Outros"],

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