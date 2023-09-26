import React, { createContext, useEffect, useState } from 'react'
export const TodoContext = createContext(null)

const Context = (props) => {

  const [todos, settodos] = useState([{todo: "Submit Assignment by 7 Oct"}])
  const [todo, settodo] = useState("")

  const [active, setactive] = useState(null)

  const { children } = props;

  // useEffect(()=>{
  //   const saveData = JSON.stringify(localStorage.getItem("react_todo"))
  //   if(saveData){
  //     settodos(saveData)
  //   }
  // })

  // useEffect(()=>{
  //   localStorage.setItem("react_todo", JSON.stringify(todos))
  // },[todos])

  return (
    <TodoContext.Provider value={{
      todos,
      settodos,
      todo,
      settodo,
      active,
      setactive,
    }}>
      {children}
    </TodoContext.Provider>
  )
}

export default Context