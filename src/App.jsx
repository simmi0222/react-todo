import React from 'react'

import {  Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import MyToDo from './Components/MyToDo';
import Create from './Components/Create';
import Update from './Components/Update';


const App = () => {
  return (

    

       <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/mytodo' element={<MyToDo/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/update' element={<Update/>}/>
      

    </Routes>


   
  )
}

export default App
