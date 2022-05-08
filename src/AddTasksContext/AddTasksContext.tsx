import {createContext, ReactNode, useState} from 'react';

// interfaxe para o contexto
interface TasksContextData {
    tasks: any[];
    addTasks: (task: any) => void;
    deleteTask:(index:number)=> void;
    showAllList:()=> void;
    
}

//interface do Provider 
interface TasksProviderProps{
    children:ReactNode;
}

export const TasksContext =createContext({} as TasksContextData);

export function TaskstDownProvider({children}:TasksProviderProps){

    const [tasks, setTask] = useState([]);
     
    //função para ler as tarefas do localStorage
    const getTasks = () => {
        return JSON.parse(localStorage.getItem("db_Tarefas")) ?? [];
    }
    
    //função para adicionar as tarefas no localStorage
    const setlocalStorage = (db_tasks:any) => {
        localStorage.setItem("db_Tarefas", JSON.stringify(db_tasks));
    }

    // função para adicionar as tarefas no contexto e no localStorage

    const addTasks= ( tarefa:object) => {
        const db_tasks= getTasks();//recebo as tarefas do localStorage
        db_tasks.push(tarefa); // faco push na tarefa recebida pelo teclado
        setlocalStorage(db_tasks);// mando para o localStorage
        setTask(db_tasks);//mando para o contexto
    }

    // função para remover as tarefas no localStorage
    const deleteTask = (index:number) => {
        const db_tasks= getTasks();//recebo as tarefas do localStorage
        db_tasks.splice(index,1);//removo a tarefa
        setlocalStorage(db_tasks);// mando para o localStorage
        setTask(db_tasks);//mando para o contexto
    }

    const showAllList = () => {
        setTask(getTasks());
    }

 


    return(
        <TasksContext.Provider value={{
            addTasks,
            tasks,
            deleteTask,
            showAllList
            
            
        }}>
            {children}      
        </TasksContext.Provider>
    )
}