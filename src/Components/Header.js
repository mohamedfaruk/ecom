import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <h4>Shopping Website</h4>
        <div className='header'>
        <Link to="/">Home</Link>
        <input type='text' placeholder='Search...'/>
        <Link to="/cart">Cart</Link>
        </div>
    </>
  )
}

export default Header