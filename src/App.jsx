import { useState } from "react";
import "./App.scss";
import InputButton from "./components/InputButton/InputButton";
import TodoComponent from "./components/TodoComponent/TodoComponent";
import NavBar from "./containers/NavBar/NavBar";
import TodosContainer from "./containers/Todos/TodosContainer";
import React from "react";
import uuid from "react-uuid";


function App() {
  const [todoJSX, setTodoJSX] = useState([]);
  const [empty, setEmpty] = useState(true);
  
  const handleToDoUpdate = (event) => {
    event.preventDefault();
    setEmpty(false)
    let id=uuid()
    if (event.target[0].value === "") {
      alert("please enter a todo");
    } else {
      setTodoJSX([
        ...todoJSX,
        <TodoComponent
          key={id}
          id={id}
          text={event.target[0].value}
          removeTodo={removeTodo}
        />,
      ]);
    }
  };
const removeTodo = (event) => {
  //cannot get to work as each time removeTodo is added to a component it saves the Todo array as it is at that moment.
  console.log(todoJSX)
  console.log(event.target.id)
};
const resetButton = () =>{
  setTodoJSX([])
  setEmpty(true)
}
  return (
    <div className="App">
      <NavBar resetButton={resetButton}/>
      <InputButton handleChange={handleToDoUpdate} />
      <TodosContainer todoJSX={todoJSX} empty={empty}/>
    </div>
  );
}

export default App;
