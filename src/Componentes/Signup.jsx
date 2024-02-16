import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/Signup.css'

function Signup() {
  return (
   
    <div className='signback'>
        <div className='bg-white p-3 rounded vw-25 card1'>
             <h2 className='headings'>Sign-Up</h2>
             <form > 
                <div className='mb-3 '>
                    <label htmlFor='name'><strong>Name</strong></label>
                    <input  type='text' placeholder='enter name' name='name' className='form-control rounded-3 mt-1' />
                </div>
                <div className='mb-3'>
                    <label htmlFor='email'><strong>Email</strong></label>
                    <input  type='email' placeholder='enter email' name='email' className='form-control rounded-3 mt-1' />
                </div>
                <div className='mb-3'>
                    <label htmlFor='age'><strong>age</strong></label>
                    <input  type='text' placeholder='enter age' name='age' className='form-control rounded-3 mt-1' />
                </div>
                <div className='mb-3'>
                    <label htmlFor='password'><strong>Password</strong></label>
                    <input  type='password' placeholder='enter password' name='password' className='form-control rounded-3 mt-1'  />
                </div>
                <Link to='/' type='submit' className='signup'>Sign up</Link>
                <p className='mt-1'>you are agree to our terms and polices</p>
                <Link to='/user' className='signup'>Login</Link>
             </form>
        </div>

    </div>
  )
}

export default Signup