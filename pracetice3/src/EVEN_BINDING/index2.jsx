import React,{useState} from 'react'

export default function index2() {
    const[count,setCount]=React.useState(0);
    const evenHandler=()=>{
        
            setCount(count+1);
    }
        
    
  return (
    <div>
        <h1>count:{count}</h1>
      <button onClick={evenHandler}>increment</button>
    </div>
  )
}
