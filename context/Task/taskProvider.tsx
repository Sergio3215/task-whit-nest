"use client"

import { useEffect, useState } from 'react'
import {taskContext} from './taskContext'

export default function TaskProvider({children}:Readonly<{children:React.ReactNode}>){

    const [data, setData] = useState([]);

    const getTask = async ()=>{
        const ftch = await fetch('https://server-task-production.up.railway.app/');
        const dta = await ftch.json();
        setData(dta);
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
