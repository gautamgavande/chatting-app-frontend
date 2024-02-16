import Button from 'react-bootstrap/Button';
import React from 'react'
import { Link } from 'react-router-dom';
import '../Style/Login.css'

function Login() {
  return (
    
    <div className='nav'>
    <div className='bg-white p-3 rounded-2.5 vw-25 card'>
         <h2 className='heading'>Login Acount</h2>
         <form > 
            <div className='mb-3 mt-4'>
                <label htmlFor='email'><strong>Email</strong></label>
                <input   type='email' placeholder='enter email' name='email' className='form-control rounded-3 mt-2' />
            </div>
            <div className='mb-3 mt-4'>
                <label htmlFor='password'><strong>Password</strong></label>
                <input   type='password' placeholder='enter password' name='password' className='form-control rounded-3 mt-2' />
            </div>
            <button type='submit' className='login'>Log in</button>
            <p className='mt-1'>you are agree to our terms and polices</p>
            <Link to='/signup' className='create'>Create Account</Link>
         </form>
    </div>

</div>
  )
}

export default Login