import React from 'react'
import InputField from "../Components/InputField";
import Item from "../Components/Item";
import add from '../assets/add.png'
import graph from '../assets/graph.png'
import { Link } from 'react-router-dom';
import api from '../helpers/api';


const Home = ({tasks, setTasks, isModalOpen, setIsModalOpen}) => {
  const {getCounts} = api()
  const token = JSON.parse(localStorage.getItem('token'))
  const [updateCounts, setUpdateCounts] = React.useState(0)

  React.useEffect(()=>{
    var data
    async function getAllCounts(){
      data = await getCounts(token) 
      setTasks(data)
    }
    getAllCounts()
  },[updateCounts])


  return (
    <>
      <button onClick={()=> setIsModalOpen(true) } className='buttonAdd'><img src={add} alt='adcionar item'/></button>
      <Link to='detalhes' className='buttonGraph'><img src={graph} alt='graficos de detalhamentos'/></Link>

        <ul className='homeList'>
          {tasks && tasks.sort((a,b)=>{
            return  Number(b.timestamp) - Number(a.timestamp)
          }).map((task)=>{
            return <Item setUpdateCounts={setUpdateCounts} key={task.id} id={task.id} task={task}/>
          })}
        </ul>

      {isModalOpen && <InputField updateCounts={updateCounts} setUpdateCounts={setUpdateCounts} setIsModalOpen={setIsModalOpen}/>}
    </>
  )
}

export default Home