import React, { useContext } from 'react'
import { TodoContext } from '../utils/Context';
import { Link, useNavigate } from 'react-router-dom';

const Update = () => {
  
    const navigate = useNavigate()

    const SubmitHandler = (event) => {
        event.preventDefault();
        const todo = { todos };

       
        settodos([...todos, todo]);
        settodo("")
       
        navigate("/mytodo")
    };

    const {
        todos,
        settodos,
        todo,
        settodo,
        active,
        setactive,
    } = useContext(TodoContext)

    const UpdateHandler = (e) => {
        e.preventDefault();
        const copytodos = [...todos];
        copytodos[active] = { ...copytodos[active], todo };
        settodos(copytodos);
        settodo("");
        
        setactive(null);
        navigate("/mytodo")
    };


  return (
    <div className='updatetodo'>
        <h1 className='text-center border-lg-dark shadow-lg  pt-3 pb-3' style={{backgroundColor: "#DDB867",fontFamily: "cursive"}}>Update ToDo's <Link to="/"> <span style={{color:"black",position:"absolute",right:"2%",top:".1%"}}>
            <img src="https://img.icons8.com/?size=80&id=109681&format=png" alt="" />
         </span></Link> </h1>
        <form className='container w-25  form-control border-5 border-md-dark shadow-sm' style={{marginTop: "10vmax",}}>
           <h1 className='text-center mt-3' style={{fontFamily: "cursive"}}>Edit Your ToDo</h1>
           <input
                className="form-control mb-3 mt-4 border-5 bprder-md-dark shadow-sm"
                onChange={(e) => settodo(e.target.value)}
                value={todo}
                type="text"
                
            />

            {active === null ? (
                <button
                    onClick={SubmitHandler}
                    className="create-todo-btn btn"
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
                    className="update-btn create-todo-btn"
                    style={{fontFamily:"cursive"}}
                >
                    Update
                </button>
            )}
            </form>
    </div>
  )
}

export default Update