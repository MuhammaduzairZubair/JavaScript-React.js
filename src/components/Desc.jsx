import React from 'react'
import { useParams } from 'react-router-dom'

const Desc = () => {
    const {description}=useParams()

    console.log(description)

  return (
    <div>
      <h1>{description}</h1>
        
    </div>
  )
}

export default Desc