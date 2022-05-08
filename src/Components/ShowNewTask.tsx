import  estilo from "../Style/AddNewTask.module.css";
import imagem from "../Imagens/lixo.png"	
import imagemEditar from "../Imagens/editar.png"	
import { useState,useContext, useEffect} from "react";
import { TasksContext } from "../AddTasksContext/AddTasksContext";


export  const AddNewTask = () => {


    // const [checked, setChecked] = useState(false);
    const {tasks,deleteTask,showAllList} = useContext(TasksContext);

       useEffect(()=>{
        showAllList();
    },[]);

    return(
        <div className={estilo.AddNewTaskContainer}>

            <ul className={estilo.AddNewTaskTarefas}>
                {
                   tasks ? (
                    tasks.map((task:any,index:number) => {
                        return(
                            <li key={index} className={estilo.AddNewTaskTarefasList}
                            >
                            <div className={estilo.div1}>
                                <p className={estilo.tasksParagro}>{task}</p>
                            </div>
                            <div>
                                <input type="checkbox" 
                                 />
                                <img src={imagem} alt="" 
                                onClick={
                                    () => {
                                        //delete
                                        deleteTask(index);
                                    }
                                }/>
                            </div>
                        </li>
                        )
                        
                    })
                   ):(
                        ""
                   )
                   
                }
            </ul>

        </div>
    )

}