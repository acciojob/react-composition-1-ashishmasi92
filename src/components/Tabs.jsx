import React, { useState } from "react";



const Tabs = ({obj})=>{
let [current,setCurrent] = useState("Tab 1")
    return(
        <>
        <ul>
            {obj.map((v)=>{
                return <li onClick={()=>{
                    setCurrent(v.title)
                }} >{v.title} </li>
            })}
        </ul>
        <h2>This is the content for {current}.</h2>
        </>
    )
}

export default Tabs

