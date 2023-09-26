import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { TodoContext } from '../utils/Context'

const Create = () => {

    const navigate = useNavigate()

    const {
        todos,
        settodos,
        todo,
        settodo,
        active,
        setactive,
    } = useContext(TodoContext)

    const SubmitHandler = (event) => {
        event.preventDefault();
        const task = { todo };

       
        settodos([...todos, task]);
        settodo("")
       
        navigate("/mytodo")
    };

    const UpdateHandler = (e) => {
        e.preventDefault();
        const todo = {todos}
        const copytodos = [...todos];
        copytodos[active] = { ...copytodos[active], todo };
        settodos(copytodos);
        
        setactive(null);
        navigate("/mytodo")
    };

  return (
    <div className='createtodo'>
        <h1 className='text-center border-lg-dark shadow-lg pt-3 pb-3' style={{backgroundColor: "#DDB867",}}>Add ToDo's <Link to="/"> <span style={{color:"black",position:"absolute",right:"2%",top:".1%"}}><img src="https://img.icons8.com/?size=80&id=109681&format=png" alt="" /></span></Link></h1>
        <form className='container w-25  form-control border-3 border-lg-dark shadow-5' style={{marginTop: '10vmax',}}>
           <h1 className='text-center mt-2' style={{fontFamily: "cursive"}}>Create new todo</h1>
           <input
                className="form-control mb-3 mt-5 border-5 bprder-md-dark shadow-sm"
                onChange={(e) => settodo(e.target.value)}
                value={todo}
                type="text"
                
            />
           {active === null ? (
                <button
                    onClick={SubmitHandler}
                    className="create-todo-btn btn "
                    style={{fontFamily: "cursive"}}
                    // style={{
                    //     backgroundColor: "tomato",
                    //     color: "white",
                    //     border: "none",
                    //     padding: "1vmax",
                    // }}
                >
                    Submit
                </button>
            ) : (
                <button
                    onClick={UpdateHandler}
                    className="btn btn-danger"
                    style={{
                        color: "white",
                        border: "none",
                        padding: "1vmax",
                    }}
                >
                    Update
                </button>
            )}
        </form>
        </div>
  )
}

export default Create