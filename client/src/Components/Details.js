import React from 'react'
import MainGraph from './Graphics/MainGraph.js'
import MainGraphOut from './Graphics/MainGraphOut.js'
import MonthGraph from './Graphics/MonthGraph.js'
import style from './styles/Details.module.css'
import home from '../assets/home.png'
import { Link } from 'react-router-dom';
import LineGraphOut from './Graphics/LineGraphOut.js'
import Loading from './Loading.js'

const Details = ({tasks}) => {
  const [select, setSelect] = React.useState('geral')

  if(tasks) return (
    <>
      <Link to='/' className={style.buttonHome}><img src={home} alt='graficos de detalhamentos'/></Link>

      <section className={style.container}>
        <select 
        className={style.select}
        id='type'
        value={select} 
        onChange={({target})=> setSelect(target.value)}
        required
        >
          <option value="geral">Detalhes gerais</option>
          <option value="despesas">Detalhes de despesas</option>
        </select>



        {select === "geral" &&
        <div className={style.graphContainer}>
          <div className={style.graphItem}>
            <h3>Visão Geral</h3>
            <MainGraph  tasks={tasks}/>
          </div>

          <div className={style.graphItem}>
            <h3>Gráfico mensal</h3>
            <MonthGraph  tasks={tasks}/>
          </div>
        </div>
        }



        {select === "despesas" &&
        <div className={style.graphContainer}>
          <div className={style.graphItem}>
            <h3>Despesas</h3>
            <MainGraphOut tasks={tasks}/>
          </div>
        
          <div className={style.graphItem}>
            <h3>Curva de despesas</h3>
            <LineGraphOut  tasks={tasks}/>
          </div>
        
        
        </div>
          }
      </section>

    </>
  )
  return <Loading />
}

export default Details

