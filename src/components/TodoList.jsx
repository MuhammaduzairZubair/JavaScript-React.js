import React from 'react'
import { Link } from 'react-router-dom'

const TodoList = ({newItems}) => {

  return (


        newItems.map((item) => {
            return(
                <div style={{ background:'white',padding:'50px', marginBottom:'5px'}} className='container'>
                <h2 style={{ background:'#e8a30e',}} className='container' align='left'>
                <Link rel="stylesheet" to={`/description/${item.title}`} >{item.title}</Link>
                </h2>
                <h4 style={{ background:'#e8a30e',}} className='container' align='left'>{item.description}</h4>
               
                </div>
               
            )
            
          
        })
        
        
        
        
    
  )
}

export default TodoList