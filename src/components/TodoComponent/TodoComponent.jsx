import React, { useState } from 'react'
import rubbishbin from "../../assets/images/rubbishbin.png"
import "./TodoComponent.scss"

const TodoComponent = ({text, removeTodo, id}) => {
    const [checked, setChecked] = useState(false)
    const [todo__text, settodo__text] = useState("todo__text")
    const changeStyle = () => {
        if (checked){
            setChecked(false)
            settodo__text("todo__text")
        } else{
            setChecked(true)
            settodo__text("todo__text--checked")
        }
    }
  return (
    <div className='todo'>
        <input type="checkbox" name="" id={id} checked={checked} onClick={changeStyle}/>
        <p className={todo__text} onClick={changeStyle}>{text}</p>
       <img src={rubbishbin} alt="delete" id={id} onClick={removeTodo}/>
    </div>
  )
}

export default TodoComponent