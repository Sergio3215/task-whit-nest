"use client"

import { useTask } from ">/context/Task/taskContext";

export default function CreateTask() {

    const {getTask}: any = useTask();

    const handlerSubmit = async (e: any) => {
        e.preventDefault();
        console.log(e.target[0].value);
        console.log(e.target[1].value);
        
        fetch('https://server-task-production.up.railway.app/', {
            method: 'POST',  // o POST, PUT, DELETE según tu caso
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: e.target[0].value,
                description: e.target[1].value
            })
        })
        .catch((err)=>console.log(err))
        .finally(()=>{
            getTask();
        })
    }

    const Style = {
        input:{
            color:"black"
        }
    }


    return (
        <div>
            <h1>Crear tarea</h1>
            <form onSubmit={handlerSubmit}>
                <div style={Style.input}>
                    <input type="text" placeholder="Nombre de la tarea" />
                </div>
                <div style={Style.input}>
                    <input type="text" placeholder="Descripción de la tarea" />
                </div>
                <div>
                    <button>Crear</button>
                </div>
            </form>
        </div>
    )
}