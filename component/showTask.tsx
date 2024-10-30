"use client"

import { useTask } from ">/context/Task/taskContext"
import { Container } from "postcss";
import { useEffect } from "react"

export default function ShowTask() {

    const { data }: any = useTask();

    useEffect(() => {
    }, [data])

    const Style: any = {
        Container: {
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
        },
        bodyContainer: {
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            color:"black",
            maxWidth: "500px",
            wordWrap: "break-word",
        },
        headerText:{
            fontSize:"24px",
            fontWeight:"bold"
        },
        bodyText:{
            fontSize:"16px",
            fontWeight:"normal"
        }
    }

    return (
        <div style={Style.Container}>
            {
                data.map((it: any, index: number) => {
                    return (
                        <>
                            <div key={it.name} style={Style.bodyContainer}>
                                <div style={Style.headerText}>{it.name}</div>
                                <div style={Style.bodyText}>{it.description}</div>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}