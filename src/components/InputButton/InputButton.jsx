import React from 'react'
import plus from "../../assets/images/plus.png"
import "./InputButton.scss"
const InputButton = ({handleChange}) => {
  return (
    <form onSubmit={handleChange} className="form">
    <input className="form__input"type="text" placeholder="Add your task here..."/>
    <button className="form__button" ><img src={plus}/></button>
  </form>
  )
}

export default InputButton