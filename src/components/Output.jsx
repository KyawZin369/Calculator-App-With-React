import React from 'react'
import './Output.css'

const Output = ({output}) => {
  return (
    <div>
        <div className="output" id="output">{output}</div>
    </div>
  )
}

export default Output