import React from 'react'
import { useParams } from 'react-router-dom'



const Desc = ({Todos}) => {
    const {title}=useParams();

  const todo = Todos.find((res)=>res.title===title);

  return (
    <div>
      <h1>{todo.title}</h1>
      <h1>{todo.description}</h1>
      
        
    </div>
  
  )
    
}


export default Desc