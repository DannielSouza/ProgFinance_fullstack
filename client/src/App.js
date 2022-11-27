import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Details from "./Components/Details";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Components/Home";
import api from './helpers/api'
import { UserProvider } from "./context/UserContext";



function App() {
  const [login, setLogin] = React.useState(false)

  const [tasks, setTasks] = React.useState(null)
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [user, setUser] = React.useState(null)

  const {checkUser} = api()


  React.useEffect(()=>{
    if(window.localStorage.getItem('token')){
      async function getUserDetails(){
        const token = JSON.parse(window.localStorage.getItem('token'))
        
        const user = await checkUser(token)
        setUser(user)
      }
      getUserDetails()
    }
    
  },[login])

  return (
    <>
      <BrowserRouter>
      <UserProvider>
          <Header tasks={tasks} setTasks={setTasks} user={user} setLogin={setLogin}/>
        <Routes>

          {login &&
          <>
          <Route path="/" element={<Home tasks={tasks} setTasks={setTasks} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>} />
          <Route path="/detalhes" element={<Details tasks={tasks}/>} />
          </>
          }
    
        </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
