import React, { useState } from "react";



const Tabs = ({obj})=>{
let [current,setCurrent] = useState("")
    return(
        <>
        <ul>
            {obj.map((v)=>{
                return <li onClick={()=>{
                    setCurrent(v.content)
                }} >{v.title} </li>
            })}
        </ul>
        <p>{current}.</p>
        </>
    )
}

export default Tabs

