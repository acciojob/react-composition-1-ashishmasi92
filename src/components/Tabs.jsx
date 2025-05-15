import React, { useState } from "react";



const Tabs = ({obj})=>{
let [current,setCurrent] = useState(0)
    return(
        <>
        <ul>
            {obj.map((v,i)=>{
                return <li key={i} onClick={()=>{
                    setCurrent(i)

                }} data-testid={`tab-${i}`} >{v.title} </li>
            })}
        </ul>
        <p>{obj[current].content}</p>
        </>
    )
}

export default Tabs

