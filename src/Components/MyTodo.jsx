import React, { useContext, useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { TodoContext } from '../utils/Context'



const MyToDo = () => {

  const navigate = useNavigate()

  const {todos, settodos, settodo, active, setactive} = useContext(TodoContext)

  const ActiveHandler = (i) => {
    setactive(i);
    settodo(todos[i].todo);
    // setskill(users[i].skill);
    navigate("/update")
};
 
const DeleteHandler = (i) => {
  const copytodos = [...todos];
  copytodos.splice(i, 1);
  settodos(copytodos);

  // setusers(users.filter((e, idx) => idx !== i));
};


  

// useEffect(() => {
//   const temp = localStorage.getItem("todos")
//   const loadedtodos = JSON.parse(temp)
//   if(loadedtodos){
//     settodos(loadedtodos)
//   }
// },[])


// useEffect(() => {
//   const temp = JSON.stringify(todos)
//   localStorage.setItem("todos",temp)
// },[todos])


  return (

    
    <>

         <div className='mytodo'>
    <div>
        <h1 className='text-center pb-3 pt-3 border-lg-dark shadow-lg text-bold' style={{backgroundColor: "#E9CFA3",fontFamily:"cursive"}}>Todoist <img className='pb-3' style={{width: "3.9%",height: "3.9%",}} src="https://cdn-icons-png.flaticon.com/128/3209/3209265.png" alt="" /> <Link to="/"> <span style={{color:"black",position:"absolute",right:"2%",top:"1.5%"}}><img src="https://img.icons8.com/?size=80&id=109681&format=png" alt="" /></span></Link></h1>
       
    
    </div>

    <div className='mytodo-btw-box'>
      <h1 style={{fontFamily:"cursive"}}>All Tasks</h1>
      
      <Link to="/create"><button className='createbtn'> <span style={{color:"black"}}>➕</span></button></Link>
    
    </div>

    <div className='container mt-4  gap-3'>
      
    {todos.map((e, i) => {
  
          
            return (
             
              
              
                <div className="container w-50  alert alert-light mt-3  d-flex justify-content-between" style={{border:"3px dotted gray",borderRadius:"2px",fontWeight:"bolder",fontSize:"2vmax",}}
                    key={i}>
                       
                
                     {e.todo}
                     {active === null && (
                         <span  style={{cursor:"pointer",}}>

                      
                             <span onClick={() => ActiveHandler(i)}>✏️</span>
                             <span onClick={() => DeleteHandler(i)}>❌</span>
                             {/* <span onClick={() => InfoHandler(i)}>ℹ️</span> */}
                         </span>
                     )}
                   
                       
                       </div>
                      
           
                       
            )
              
                
              })}
          

            

</div>

</div>

    </>
  )
}

export default MyToDo