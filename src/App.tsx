import { useState } from 'react'
import estilo from '../src/Style/app.module.css'
import { AddNewTask } from './Components/ShowNewTask'
import { InputNewTask } from './Components/InputNewTask'
import {TaskstDownProvider } from './AddTasksContext/AddTasksContext'


function App() {

   
  return (
    <div className={estilo.app}>
       <div className={estilo.logo}>
          <h1>TaskDo</h1>
       </div>
      
       <TaskstDownProvider>
          <InputNewTask />
          <AddNewTask  />
       </TaskstDownProvider>
        
    </div>
  )
}

export default App
