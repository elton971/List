import  estilo from "../Style/InputNewTask.module.css";
import {useContext, useState} from "react";
import { TasksContext } from "../AddTasksContext/AddTasksContext";


export const InputNewTask = () => {

    const [valTeclado,setTeclado]=useState("");
    const {addTasks} = useContext(TasksContext);

   
    return(
        <div className={estilo.AddNewTaskContent}>
            <input type="text" placeholder="New Task"
                onChange={
                    (e) => {
                        setTeclado(e.target.value);
                    }
                }           
                onKeyDown={(e) => {
                    if (e.key === "Enter") 
                    {   
                        addTasks(e.target.value);
                       
                    }
                }
               }
            />
            <button className={estilo.AddNewTaskButton}
                onClick={(e) => {
                    addTasks(valTeclado);
                }}
            >
                Add item
            </button>
                
        </div>
    )
}