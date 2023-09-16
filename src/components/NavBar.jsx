import React from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom'
function NavBar() {
  
  return (
    <div>
        <nav>
            <p className='heading'>TODO-LIST!!</p>
            <Link className='button' to="TaskForm">Create A New Task</Link>
        </nav>
    </div>
    
  )
}

export default NavBar