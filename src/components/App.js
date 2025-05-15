
import React from "react";
import './../styles/App.css';
import Tabs from "./Tabs";

let tabObj = [
  {id:1,title:"tab 1"},
  {id:2,title:"tab 2"},
  {id:3,title:"tab 3"},
]


const App = () => {
  return (
    <div>
       <Tabs
       obj={tabObj}
       />
    </div>
  )
}

export default App
