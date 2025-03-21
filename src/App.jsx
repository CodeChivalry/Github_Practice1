// import React from 'react'
// function App(){
//   console.log("re-render");
//   const [count,setCount]=React.useState(0); //hook
//   return(
//     <div>
//       <Button count={count} setCount={setCount}></Button>
//     </div>
//   )
//   function Button(props){
//     function onButtonPress(){
//       props.setCount(props.count+1);
//     }
//     return <button onClick={onButtonPress}>Counter {props.count}</button>
//   }
// }
// export default App
import {useState} from "react";
import "./App.css";
export default function App(){
  console.log("rerender");
  const statevar=useState(0);
  const count=statevar[0];
  const setCount=statevar[1];
  function onClickHandler(){
    setCount(count+1);
  }
  return (
    <div>
      <button onClick={onClickHandler}>Counter {count}</button>
    </div>
  )
}

