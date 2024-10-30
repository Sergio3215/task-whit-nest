"use client"

import { useEffect, useState } from 'react'
import {taskContext} from './taskContext'

export default function TaskProvider({children}:Readonly<{children:React.ReactNode}>){

    const [data, setData] = useState([]);

    const getTask = async ()=>{
        fetch('https://server-task-production.up.railway.app/')
        .then(res=>res.json())
        .then(data=>setData(data))
        .catch(err=>console.log(err))
    }

    useEffect(()=>{
        getTask();
    },[])
    
    useEffect(()=>{
        
    },[data])

    return(
        <taskContext.Provider value={{data, getTask}}>
            {children}
        </taskContext.Provider>
    )
}
