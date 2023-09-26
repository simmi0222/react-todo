import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
  

<div className='d-flex'>
<div className='w-50'>
  <img className='homeimg' src="https://img.freepik.com/premium-photo/cartool-illustration-halloween-house_665280-23940.jpg?size=626&ext=jpg" alt="" />
</div>


<div className='w-50'>
  <h1 className='home-text' style={{fontFamily: "cursive"}}>Organize it all <br />
   <span className='home-text-span1' style={{fontFamily: "cursive"}}>with</span> <br /> <span className='home-text-span2'style={{fontFamily: "cursive"}}>Todoist</span> <img className='home-text-img' src="https://cdn-icons-png.flaticon.com/128/8415/8415993.png" alt="" /></h1>


   <Link to="/mytodo"><button className='homebtn btn' style={{fontFamily: "cursive",}}>MyTodo</button></Link>
    </div>

</div>


    </>
  )
}

export default Home