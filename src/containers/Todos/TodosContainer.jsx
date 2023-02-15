import React, { useState } from "react";
import TodoComponent from "../../components/TodoComponent/TodoComponent";
const TodosContainer = ({ todoJSX, empty}) => {
  let display = [];
  if (empty) {
    display = 'Nothing to see here yet... Add a task in the feild above! ☝️';
  } else {
    display = todoJSX;
  }
  return <div>{display}</div>;
};

export default TodosContainer;
